import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'modules/common/utils';
import { compose, gql, graphql } from 'react-apollo';
import { SegmentsForm } from '../components';
import { mutations, queries } from '../graphql';
import { queries as customerQueries } from 'modules/customers/graphql';

const SegmentsFormContainer = props => {
  const {
    segmentDetailQuery,
    headSegmentsQuery,
    combinedFieldsQuery,
    segmentsAdd,
    customerCounts
  } = props;

  if (
    segmentDetailQuery.loading ||
    headSegmentsQuery.loading ||
    combinedFieldsQuery.loading
  ) {
    return null;
  }

  const fields = combinedFieldsQuery.fieldsCombinedByContentType.map(
    ({ name, label }) => ({
      _id: name,
      title: label,
      selectedBy: 'none'
    })
  );

  const segment = segmentDetailQuery.segmentDetail;
  const headSegments = headSegmentsQuery.segmentsGetHeads;

  const create = ({ doc }) => {
    segmentsAdd({ variables: { ...doc } }).then(() => {
      Alert.success('Success');
    });
  };

  const count = segment => {
    customerCounts.refetch({
      byFakeSegment: segment
    });
  };

  const updatedProps = {
    ...props,
    fields,
    segment,
    headSegments,
    create,
    count,
    total: customerCounts.customerCounts || {}
  };

  return <SegmentsForm {...updatedProps} />;
};

SegmentsFormContainer.propTypes = {
  segmentDetailQuery: PropTypes.object,
  headSegmentsQuery: PropTypes.object,
  combinedFieldsQuery: PropTypes.object,
  segmentsAdd: PropTypes.func,
  customerCounts: PropTypes.object
};

export default compose(
  graphql(gql(queries.segmentDetail), {
    name: 'segmentDetailQuery',
    options: ({ id }) => ({
      variables: { _id: id }
    })
  }),
  graphql(gql(customerQueries.customerCounts), {
    name: 'customerCounts'
  }),
  graphql(gql(queries.headSegments), { name: 'headSegmentsQuery' }),
  graphql(gql(queries.combinedFields), {
    name: 'combinedFieldsQuery'
  }),
  // mutations
  graphql(gql(mutations.segmentsAdd), {
    name: 'segmentsAdd'
  })
)(SegmentsFormContainer);
