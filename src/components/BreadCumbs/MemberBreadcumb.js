import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function MemberBreadcumb() {
  return (
    <StlyedBreadcrumb>
      <StlyedBreadcrumbItem href="">
        <HomeOutlined />
      </StlyedBreadcrumbItem>
      <StlyedBreadcrumbItem href="">
        <span>Bussniess Insight</span>
      </StlyedBreadcrumbItem>
      <StlyedBreadcrumbItem href="">
        <span>Report</span>
      </StlyedBreadcrumbItem>
      <StlyedBreadcrumbItem href="">
        <span>Member</span>
      </StlyedBreadcrumbItem>
      <StlyedBreadcrumbItem>
        <span>Member</span>
      </StlyedBreadcrumbItem>
    </StlyedBreadcrumb>
  );
}

const StlyedBreadcrumb = styled(Breadcrumb)`
  margin-bottom: 20px;
  span {
    font-weight: bold;
  }
  > span:last-child {
    color: ${themes.light.textBreadcrumb};
    font-size: 1.5rem;
  }
`;

const StlyedBreadcrumbItem = styled(Breadcrumb.Item)``;
