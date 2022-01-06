import { memo } from "react";
// import { useHeading } from 'components/CartPageV2/MainProduct/Heading/hooks';

import { StyledMyAccount, SideBar } from "./styles";

const MyAccount = memo(() => {
  return (
    <StyledMyAccount>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <SideBar>
        <li>Giao Diện</li>
        <li>Thống Kê</li>
        <li>Thông Tin Cửa Hàng</li>
        <li>Thêm/Sửa Sản Phẩm</li>
        <li>Đơn Hàng</li>
      </SideBar>
    </StyledMyAccount>
  );
});

export default MyAccount;
