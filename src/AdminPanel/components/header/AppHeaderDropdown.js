import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilBell,
  cilCommentSquare,
  cilLockLocked,
  cilSettings,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import avatar8 from "./../../../assets/image/avatars/8.jpg";
import { Link } from "react-router-dom";

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Settings
        </CDropdownHeader>{" "}
        <Link to="comments">
          <CDropdownItem>
            <CIcon icon={cilCommentSquare} className="me-2" />
            کامنت ها
            {/* <CBadge color="warning" className="ms-2">
              42
            </CBadge> */}
          </CDropdownItem>
        </Link>
        <Link to="dashboard">
          <CDropdownItem>
            <CIcon icon={cilUser} className="me-2" />
            پروفایل
          </CDropdownItem>
        </Link>
        <Link to="settings">
          <CDropdownItem>
            <CIcon icon={cilSettings} className="me-2" />
            تنظیمات
          </CDropdownItem>
        </Link>
        <CDropdownDivider />
        <CDropdownItem href="/">
          <CIcon icon={cilLockLocked} className="me-2" />
          خروج
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
