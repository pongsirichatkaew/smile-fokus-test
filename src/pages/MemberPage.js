import styled from "styled-components";
// Components
import MemberBreadcumb from "../components/BreadCumbs/MemberBreadcumb";
import MemberTable from "../components/Table/Table";
import Summary from "../components/Sumary/Summary";
import { Row, Col } from "antd";
import { Button, DatePicker } from "antd";
import {
  DownOutlined,
  LineChartOutlined,
  DownloadOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import moment from "moment";

// Stlyes
import { themes } from "../styles/ColorStyles";

// Data
import jsonData from "../data/data.json";

export default function MainPage() {
  const { data } = jsonData;
  const yearFormat = "YYYY";

  return (
    <>
      <ContentWrapper>
        <Row>
          <Col xs={12}>
            <MemberBreadcumb />
          </Col>
          <Col xs={12} style={{ textAlign: "right" }}>
            <StyledButton
              type="primary"
              shape="circle"
              icon={<LineChartOutlined />}
            />
            <StyledButton
              type="primary"
              shape="circle"
              icon={<DownloadOutlined />}
            />
            <StyledButton
              type="primary"
              shape="circle"
              icon={<PrinterOutlined />}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TextParagraph>
              Yearly Member <span>01-Jan-2020 to 31-Dec-2020</span>
            </TextParagraph>
          </Col>
          <Col xs={12} style={{ textAlign: "right" }}>
            <StyledButtonOutline>
              Year View
              <DownOutlined />
            </StyledButtonOutline>
            <DatePicker
              defaultValue={moment(`${moment().year()}`, yearFormat)}
              format={yearFormat}
            />
          </Col>
        </Row>

        <Summary data={data} />
        <MemberTable list={data.list} summary={data.summary} />
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  /* max-width: 1234px; */
  padding: 60px 10px;
  height: 100vh;
  /* margin: 60px 10px; */
`;

const TextParagraph = styled.p`
  font-weight: bold;
  color: ${themes.light.textBreadcrumb};
  font-size: 1.5rem;
  span {
    font-size: 1.2rem;
  }
`;

const StyledButton = styled(Button)`
  color: ${themes.light.text1};
  background: ${themes.light.textBreadcrumb};
  border-color: ${themes.light.textBreadcrumb};
  margin-right: 10px;
  &:hover,
  &:focus {
    border-color: orange;
    background: orange;
    color: ${themes.light.text1};
  }
  &:active {
    border-color: orange;
    background: orange;
    color: ${themes.light.text1};
  }
`;

const StyledButtonOutline = styled(Button)`
  color: ${themes.light.textBreadcrumb};
  border-color: ${themes.light.textBreadcrumb};
  margin-right: 10px;
  &:hover,
  &:focus {
    border-color: orange;
    color: orange;
  }
  &:active {
    border-color: orange;
    color: orange;
  }
`;
