import { DatePicker } from 'antd';
import moment from 'moment';

export default function Calendar() {
    return (
        <div>
            <DatePicker format="DD/MM/YYYY" defaultValue={moment('2021-02-04', 'YYYY-MM-DD')} />
        </div>
    );
}