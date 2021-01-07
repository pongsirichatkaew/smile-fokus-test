import { Table } from "antd";
import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
const columns = [
  {
    title: "Name",
    dataIndex: "customername",
    key: "customername",
  },
  {
    title: "ID",
    dataIndex: "customerphone",
    key: "customerphone",
  },
  {
    title: "Tier",
    dataIndex: "customertier",
    key: "customertier",
    width: "5%",
  },
  {
    title: "LTV",
    dataIndex: "totalamount",
    key: "totalamount",
  },
  {
    title: "Total Trans.",
    dataIndex: "totaltransaction",
    key: "totaltransaction",
  },
  {
    title: "Total Point",
    dataIndex: "totalreward",
    key: "totalreward",
  },
  {
    title: "Remaining Point",
    dataIndex: "remainingpoint",
    key: "remainingpoint",
  },
];

export default function MemberTable({ list, summary }) {
  const data = list.map((item, index) => {
    return { ...item, key: index };
  });
  return (
    <StlyedTable
      scroll={{ x: 1300 }}
      columns={columns}
      dataSource={data}
      summary={() => (
        <Table.Summary.Row>
          <StyledTableSummary></StyledTableSummary>
          <StyledTableSummary>Total</StyledTableSummary>
          <StyledTableSummary></StyledTableSummary>
          <StyledTableSummary>{summary.lifetimevalue}</StyledTableSummary>
          <StyledTableSummary>{summary.totaltransaction}</StyledTableSummary>
          <StyledTableSummary>{summary.totalpoint}</StyledTableSummary>
          <StyledTableSummary>{summary.remainingpoint}</StyledTableSummary>
        </Table.Summary.Row>
      )}
    />
  );
}

const StlyedTable = styled(Table)`
  .ant-table-thead > tr > th {
    background: ${themes.light.tableBackgroundColor};
    border-left: 1px solid white;
    color: ${themes.light.text1};
    text-align: center;
    font-weight: bold;
  }

  .ant-table-tbody > tr > td {
    border-right: 1px solid #eeeeee;
    font-weight: bold;
    padding: 8px 16px;
  }
  .ant-table-tbody tr {
    background: #eeeeee;
  }
  .ant-table-tbody tr:nth-child(2n) {
    background: white;
  }
`;

const StyledTableSummary = styled(Table.Summary.Cell)`
  color: ${themes.light.textBreadcrumb};
  font-weight: bold;
`;
