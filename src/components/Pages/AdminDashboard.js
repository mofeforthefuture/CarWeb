import React from 'react';
import AppNavbar from '../AppNavbar';
import InfoCards from '../Custom/InfoCards';
import { PieChart } from 'react-minimal-pie-chart';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Home.css'

function AdminDashboard(props) {
    const percentage = 66;
    return (
        <div>
            <AppNavbar />
            <div className='info-cards'>
                <InfoCards icolor='#000'>Cars:  4</InfoCards>
                <InfoCards icolor='#6666ff'>Trucks:  4</InfoCards>
                <InfoCards icolor='#008000'>Jeeps:  4</InfoCards>
                <InfoCards icolor='#00004d'>Cars:  4</InfoCards>
            </div>


            <div className='progress-div'>
                <PieChart
                    className='piechart progressbars-group'
                    value='15'
                    data={[
                        { title: '1', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}
                />
                <div className='progressbars-group' style={{ width: 200, height: 200 }}>
                    <h4>No. of Visits</h4>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        className='progressbar'
                        styles={buildStyles({
                            pathColor: `rgba(0, 152, 199, ${percentage / 100})`,
                        })}
                    />

                </div>
                <div className='progressbars-group' style={{ width: 200, height: 200 }}>
                    <h4>No. of Users</h4>
                    <CircularProgressbar
                        value={14}
                        text={`${134}`}
                        className='progressbar'
                        styles={buildStyles({
                            pathColor: `rgba(0, 152, 199, ${percentage / 100})`,
                        })}
                    />

                </div>
                <div className='progressbars-group' style={{ width: 200, height: 200 }}>
                    <h4>No. of Admins</h4>
                    <CircularProgressbar
                        value={'56'}
                        text={`${56}`}
                        className='progressbar'
                        styles={buildStyles({
                            pathColor: `rgba(0, 152, 199, ${percentage / 100})`,
                        })}
                    />
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;