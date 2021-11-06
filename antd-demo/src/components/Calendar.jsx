import { DatePicker } from 'antd';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/pt_BR';

export default function Calendar() {
    return (
        <div>
            <DatePicker locale={locale} format="DD/MM/YYYY" defaultValue={moment('2021-02-04', 'YYYY-MM-DD')} />
        </div>
    );
}