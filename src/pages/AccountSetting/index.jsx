import React from 'react'
import UsersInfoTab from '../../Component/UsersInfoTab'
import { useSelector } from 'react-redux'
import PropertyCard from '../../ReUseAbleComponent/PropertyCard';
import { Link } from 'react-router-dom';
import { DIV } from '../../ReUseAbleComponent/FormComponent';
import { Typography } from '@mui/material';

export default function AccountSetting() {
    const state = useSelector(state => state.UserTab);
    const Featured = useSelector(state => state.FeaturedPropertyReducer.list)
    const Auth = useSelector(state => state.AuthReducer.login)
    

    React.useEffect(() => {
        console.log(Featured)
        console.log(Auth)
    }, [])
    return (
        <>
        <UsersInfoTab />
        <DIV id="tab-1" className={`tab-content ${state.Tab === 1 ? 'current':''}`}>
            <DIV className="profile-view">
                <DIV className="container-fluid">
                    <DIV className="row">
                        <DIV className="col-12 col-md-4">
                            <DIV className="profile-view--img">
                                <p className="profile-view--img--first">{Auth.displayName ? Auth.displayName:'Something Else'}</p>
                                <Typography component={'p'} className="profile-view--img--second">
                                    Basic info, email, password settings
                                </Typography>
                            </DIV>
                            <DIV className="profile-view--info">
                                <DIV className="flex content-space-between items-center padding-bottom-11">
                                    <span className="profile-view--info--title"> Your Info</span>
                                    <Link to="/profile/edit">
                                        <i className="fa fa-pencil fa-2x" aria-hidden="true" />
                                    </Link>
                                </DIV>
                                <DIV className="row">
                                    <DIV className="col-6 col-md-4 padding-bottom-11 flex items-center label-title">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/images2019/Icons/profile-person.svg"
                                            width={35}
                                            height={18}
                                            className="padding-right-1"
                                            alt=""
                                        />
                                        Name
                                    </DIV>
                                    <DIV className="col-6 padding-bottom-11 label-detail">
                                    {Auth.displayName ? Auth.displayName:'Something Else'}
                                    </DIV>
                                    <DIV className="col-6 col-md-4 padding-bottom-11 flex items-center label-title">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/images2019/Icons/envelope-person.svg"
                                            width={35}
                                            height={18}
                                            className="padding-right-1"
                                            alt=""
                                        />
                                        E-mail
                                    </DIV>
                                    <DIV className="col-6 padding-bottom-11 label-detail longword-sm">
                                    {Auth.email ? Auth.email:'Something Else'}
                                    </DIV>
                                </DIV>
                            </DIV>
                        </DIV>
                        <DIV className="profile-view--emailsettings col-12 col-md-4 mar-top-15-sm">
                            <p className="first"> Email Settings </p>
                            <DIV className="padding-hrz-05">
                                <p className="second"> Email me saved listings &amp; searches</p>
                                <form
                                    method="post"
                                    action="https://www.propertyturkey.com/profile/updateEmailSettings"
                                >
                                    <p>
                                        <input
                                            type="radio"
                                            id="test1"
                                            name="email_me"
                                            defaultValue="never"
                                            className="radio-email-custom"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="test1"> Never</label>
                                    </p>
                                    <p>
                                        <input
                                            type="radio"
                                            id="test2"
                                            name="email_me"
                                            defaultValue="weekly"
                                            className="radio-email-custom"
                                        />
                                        <label htmlFor="test2"> Weekly</label>
                                    </p>
                                    <p>
                                        <input
                                            type="radio"
                                            id="test3"
                                            name="email_me"
                                            defaultValue="monthly"
                                            className="radio-email-custom"
                                        />
                                        <label htmlFor="test3"> Monthly</label>
                                    </p>
                                    <hr className="margin-ver-2" />
                                    <p className="second">
                                        Email me recommended listings , news , blog ..{" "}
                                    </p>
                                    <p>
                                        <input
                                            type="radio"
                                            id="test4"
                                            name="newsletter_subscribed"
                                            defaultValue={1}
                                            className="radio-email-custom"
                                        />
                                        <label htmlFor="test4"> Yes</label>
                                    </p>
                                    <p>
                                        <input
                                            type="radio"
                                            id="test5"
                                            name="newsletter_subscribed"
                                            defaultValue={0}
                                            className="radio-email-custom"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="test5"> No</label>
                                    </p>
                                    <p>
                                        <input type="submit" defaultValue="Save" className="btn" />
                                    </p>
                                </form>
                            </DIV>
                        </DIV>
                        <DIV className="col-12 col-md-4">
                            <DIV className="profile-view--passwordsetting">
                                <p className="first"> Password Settings</p>
                                <Link to="/changepwd">
                                    Change Password
                                </Link>
                            </DIV>
                        </DIV>
                    </DIV>
                </DIV>
            </DIV>
        </DIV>     
        <DIV id="tab-2" className={`tab-content ${state.Tab === 2 ? 'current':''}`}>
            <p>This is Tab 2</p>
        </DIV>
        <DIV id="tab-3" className={`tab-content ${state.Tab === 3 ? 'current':''}`}>
            
                        {
                            Featured.map((item)=>{
                                return(
                                    <PropertyCard title={item.Property_Name}/>
                                )
                            })
                        }
                
            
        </DIV>
        <DIV id="tab-4" className={`tab-content ${state.Tab === 4 ? 'current':''}`}>
        <p>This is Tab 4</p>
        </DIV>
        <DIV id="tab-5" className={`tab-content ${state.Tab === 5 ? 'current':''}`}>
        <p>This is Tab 5</p>
        </DIV>

        </>

    )
}
