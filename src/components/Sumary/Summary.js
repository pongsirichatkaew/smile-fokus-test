import styled from "styled-components";
import { Row, Col } from "antd";

export default function Summary({ data }) {
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  return (
    <StlyedSummaryContainer justify="space-around">
      <StyledSummary1 xs={8}>
        <StyledRow>
          <Col xs={12}>
            Total <span>Members:</span>
          </Col>
          <Col xs={12} style={{ textAlign: "right" }}>
            <span>{data.list.length}</span>
          </Col>
        </StyledRow>
        <StyledRow>
          <Col xs={12}>
            Total <span>Rev.(THB):</span>
          </Col>
          <Col xs={12} style={{ textAlign: "right" }}>
            <span>{kFormatter(data.summary.lifetimevalue)}</span>
          </Col>
        </StyledRow>
      </StyledSummary1>
      <StyledSummary2 xs={16}>
        <StyledRow2>
          <Col xs={24} style={{ textAlign: "center" }}>
            ttt
          </Col>
          <StyledRow2>
            <Col xs={12}>
              Total <span>Members:</span>
            </Col>
            <Col xs={12} style={{ textAlign: "right" }}>
              <span>{data.list.length}</span>
            </Col>
          </StyledRow2>
          <StyledRow2>
            <Col xs={12}>
              Total <span>Rev.(THB):</span>
            </Col>
            <Col xs={12} style={{ textAlign: "right" }}>
              <span>{kFormatter(data.summary.lifetimevalue)}</span>
            </Col>
          </StyledRow2>
        </StyledRow2>
      </StyledSummary2>
    </StlyedSummaryContainer>
  );
}
const StlyedSummaryContainer = styled(Row)`
  /* height: 100px; */
  width: 100%;
  margin: 10px 0;
`;

const StyledSummary1 = styled(Col)`
  background: orange;
  /* height: 200px; */
`;

const StyledSummary2 = styled(Col)`
  background: #827e7b;
`;

const StyledRow = styled(Row)`
  display: flex;
  width: 100%;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  span {
    font-size: 1.8rem;
  }
`;

const StyledRow2 = styled(Row)`
  width: 100%;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  span {
    font-size: 1.4rem;
  }
`;
