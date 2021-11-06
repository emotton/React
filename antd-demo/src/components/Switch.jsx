import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default function SwitchX() {
    return (
        <div>
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
            />
        </div>
    );
}