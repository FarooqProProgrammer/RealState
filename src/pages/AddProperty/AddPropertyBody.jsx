import React, { useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import { cityToggle } from '../../Data/CityToggle';
import { PropertyEditor } from '../../ReUseAbleComponent/PropertyEditor';
import { Input } from '../../ReUseAbleComponent/FormComponent';
import Image from '../../ReUseAbleComponent/Image';
import TruncatedText from '../../ReUseAbleComponent/TruncatedText';
import { Typography } from '@mui/material';

export default function AddPropertyBody() {
    const [title, setTitle] = React.useState(' ');
    const [HomeInterior, SetHomeInterior] = React.useState(' ');
    const [garden, SetGarden] = React.useState(' ');
    const [PropertyLocation, setPropertyLocation] = React.useState(' ');
    const [whyBuyProperty, setwhyBuyProperty] = React.useState();

    // Phase II
    const [Country, setCountry] = useState(' ');
    const [City, setCity] = useState(' ');
    const [Bedrooms, setBedrooms] = useState(' ');
    const [Bathrooms, setBathrooms] = useState(' ');
    const [Area, setArea] = useState(' ');
    const [Type, setType] = useState(' ');
    const [LivingSpace, setLivingSpace] = useState(' ');
    const [landSize, setLandSize] = useState(' ');
    const [pool, setPool] = useState(' ');
    const [status, setStatus] = useState(' ');
    const [Price, setPrice] = useState(' ');
    const [currency, setCurrency] = useState(' ');

    const [formData, setFormData] = useState({
        Country: '',
        City: '',
        Bedrooms: '',
        Bathrooms: '',
        Area: '',
        Type: '',
        LivingSpace: '',
        landSize: '',
        pool: '',
        status: '',
        Price: '',
        currency: '',
      });


    const propetyInfo = useRef();
    const propetyDetailRef = useRef();
    const propetysummary = useRef();

    const HandleInfoNext = () => {
        console.log(propetyInfo)
        if (title === '' || HomeInterior === '' || garden === '' || PropertyLocation === '' || whyBuyProperty === '') {
            toast("Please Fill All Fields")
            return;
        }
        propetyInfo.current.style.display = "none";
        propetyDetailRef.current.style.display = "block"
    }

    const HandleDetailNext = () => {
        propetyDetailRef.current.style.display = "none";
        propetysummary.current.style.display = "block"
    }

    const handleHomeInterior = (value) => {
        SetHomeInterior(value);
    };


    const HandleAddProperties = (e) => {
        e.preventDefault();
        
    }


    return (
        <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
            <h3 className="page-title">Add Your Own Property</h3>
            <div className="cf">
                <form
                    className="col-dis-12 col-tab-12 col-mob-12 clearfix"
                    onSubmit={HandleAddProperties}
                >
                    <div className="tabs">
                        <ul className="steps">
                            <li className="active">
                                <a className="general" href="#general">
                                    <span className="step">1</span>
                                    <b>Describe Your Property</b>
                                </a>
                            </li>
                            <li>
                                <a className="property-info" href="#property-info">
                                    <span className="step">2</span>
                                    <b>Property Details</b>
                                </a>
                            </li>
                            <li>
                                <a className="summary" href="#summary">
                                    <span className="step">3</span>
                                    <b>summary</b>
                                </a>
                            </li>
                        </ul>
                        <div id="general" ref={propetyInfo} className="content box white cf" style={{}}>
                            <label
                                className="field col-dis-12 col-tab-12 col-dis-12"
                                rel="realestate_title"
                                charcount="0/60"
                            >
                                <b>
                                    Real Estate Title <span className="red">*</span>:
                                </b>
                                <Input
                                    validation="maxChars-60"
                                    placeholder="Example: Luxury five star villa in Istanbul with pool"
                                    name="rea_title"
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>
                            {/* editor */}
                            <PropertyEditor value={HomeInterior} onChange={handleHomeInterior} text={'Description of home interior'} />
                            {/* editor */}
                            <PropertyEditor value={garden} onChange={value => SetGarden(value)} text={'Description of garden and exterior'} />
                            {/* editor */}
                            <PropertyEditor value={PropertyLocation} onChange={value => setPropertyLocation(value)} text={'Location of the property'} />

                            {/* editor */}
                            <PropertyEditor value={whyBuyProperty} onChange={value => setwhyBuyProperty(value)} text={'Why buy this property'} />

                            {/*  */}
                            <div id="imagesContainer">
                                <label
                                    className="field col-dis-12 col-tab-12 col-dis-12"
                                    rel="uploaded_image"
                                >
                                    <b>
                                        Upload Multiple Property Images <span className="red">*</span>:
                                    </b>
                                    <div className="w-full flex justify-between items-center">
                                        <Input
                                            className="name"
                                            validation="validation"
                                            type="file"
                                            multiple
                                        />
                                    </div>

                                </label>
                            </div>

                            <div className="cf col-dis-12 col-tab-12 col-dis-12 controls">
                                <div
                                    className="navigateStep left btn"
                                >
                                    Previous
                                </div>
                                <div
                                    onClick={HandleInfoNext}
                                    className="navigateStep right btn"
                                >
                                    Next
                                </div>
                            </div>
                        </div>
                        <div
                            id="property-info"
                            ref={propetyDetailRef}
                            className="content box white cf"
                            style={{ display: "none" }}
                        >
                            <div className="col-dis-6 col-tab-6 col-mob-12">
                                <label
                                    className="field col-dis-6 col-tab-6 col-mob-12"
                                    rel="country"
                                >
                                    <b>
                                        Country <span className="red">*</span>:
                                    </b>
                                    <select validation="validation" onChange={(e) => setCountry(e.target.value)}>
                                        <option value="default">-- Country --</option>
                                        <option value={'USA'}>USA</option>
                                    </select>
                                </label>
                                <label className="field col-dis-6 col-tab-6 col-mob-12" rel="city">
                                    <b>
                                        City <span className="red">*</span>:
                                    </b>
                                    <select validation="validation" onChange={(e) => setCity(e.target.value)}>
                                        <option value={0}>-- City --</option>
                                        <option value={'San Fransico'}>San Fransico</option>
                                    </select>
                                </label>
                                <label className="field col-dis-6 col-tab-6 col-mob-12" rel="area">
                                    <b>Area :</b>
                                    <select name="are_id" onChange={(e) => setArea(e.target.value)}>
                                        <option value={0}>-- Area --</option>
                                        {
                                            cityToggle.map((item) => {
                                                return (
                                                    <option value={item.County}>{item.County}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </label>
                                <label className="field col-dis-6 col-tab-6 col-mob-12" rel="type">
                                    <b>
                                        Type <span className="red">*</span>:
                                    </b>
                                    <select onChange={(e) => setType(e.target.value)}>
                                        <option value={0}>-- Type --</option>
                                        <option value={'Apartment'}>Apartment</option>
                                        <option value={'Bungalow'}>Bungalow</option>
                                        <option value={'Commercial'}>Commercial</option>
                                        <option value={'Hotel for sale'}>Hotel for sale</option>
                                        <option value={'Land for sale'}>Land for sale</option>
                                        <option value={'Penthouse'}>Penthouse</option>
                                        <option value={'Villa'}>Villa</option>
                                    </select>
                                </label>
                                <label className="field col-dis-6 col-tab-6 col-mob-12" rel="pool">
                                    <b>Pool:</b>
                                    <select onChange={(e) => setPool(e.target.value)}>
                                        <option value="N/A">N/A</option>
                                        <option value="private">Private</option>
                                        <option value="shared">Shared</option>
                                    </select>
                                </label>
                                <label
                                    className="field col-dis-6 col-tab-6 col-mob-12"
                                    rel="status"
                                >
                                    <b>
                                        Status: <span className="red">*</span>:
                                    </b>
                                    <select validation="validation" name="sta_id" onChange={(e) => setStatus(e.target.value)}>
                                        <option value={0}>-- Status --</option>
                                        <option value={'New Build'}>New Build</option>
                                        <option value={'Off Plan'}>Off Plan</option>
                                        <option value={'Off Plan'}>Resale</option>
                                    </select>
                                </label>
                            </div>
                            <div className="col-dis-6 col-tab-6 col-mob-12">
                                <label
                                    className="field col-dis-6 col-tab-6 col-mob-12"
                                    rel="bedrooms"
                                >
                                    <b>
                                        Bedrooms: <span className="red">*</span>:
                                    </b>
                                    <Input
                                        validation="validation"
                                        name="rea_bedrooms"
                                        type="number"
                                        onChange={(e) => setBedrooms(e.target.value)}

                                    />
                                </label>
                                <label
                                    className="field col-dis-6 col-tab-6 col-mob-12"
                                    rel="bathrooms"
                                >
                                    <b>
                                        Bathrooms: <span className="red">*</span>:
                                    </b>
                                    <Input
                                        validation="validation"
                                        name="rea_bathrooms"
                                        type="number"
                                        onChange={(e) => setBathrooms(e.target.value)}
                                    />
                                </label>
                                <label
                                    className="field col-dis-6 col-tab-6 col-mob-12"
                                    rel="living_space"
                                >
                                    <b>
                                        Living space sqm: <span className="red">*</span>:
                                    </b>
                                    <Input
                                        validation="validation"
                                        name="rea_living_space"
                                        type="number"
                                        onChange={(e) => setLivingSpace(e.target.value)}
                                    />
                                </label>
                                <label className="field col-dis-6 col-tab-6 col-mob-12" rel="land">
                                    <b>Land size sqm:</b>
                                    <Input name="rea_land_sqm" type="number" onChange={(e) => setLandSize(e.target.value)} />
                                </label>
                                <label className="field col-dis-7 col-tab-7 col-mob-7" rel="price">
                                    <b>
                                        Price: <span className="red">*</span>:
                                    </b>
                                    <Input
                                        validation="price"
                                        placeholder={'50000'}
                                        name="rea_price"
                                        type="number"
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </label>
                                <label
                                    className="field col-dis-5 col-tab-5 col-mob-7"
                                    rel="currency"
                                >
                                    <b>
                                        Currency: <span className="red">*</span>:
                                    </b>
                                    <select validation="validation" name="currency" onChange={(e) => setCurrency(e.target.value)}>
                                        <option value={'$'}>$</option>
                                        <option value={'TRY'}>TRY</option>
                                        <option value={'£'}>£</option>
                                        <option value={'€'}>€</option>
                                    </select>
                                </label>
                            </div>
                            <div className="cf col-dis-12 col-tab-12 col-dis-12 controls">
                                <div

                                    className="navigateStep left btn"
                                >
                                    Previous
                                </div>
                                <div
                                    className="navigateStep right btn" onClick={HandleDetailNext}
                                >
                                    Next
                                </div>
                            </div>
                        </div>
                        <div
                            id="summary"
                            ref={propetysummary}
                            className="content box white cf"
                            style={{ display: "none" }}
                        >
                            <div className="col-dis-8 col-tab-8 col-mob-12">
                                <h3 className="field realestate_title">
                                    <span />
                                </h3>
                                <h3 className="title">Description of home interior:</h3>
                                <div className="field home_interior">
                                    <TruncatedText text={HomeInterior  || "File All Fields"} maxLength={15} />
                                </div>
                                <h3 className="title">Description of garden and exterior:</h3>
                                <div className="field garden_exterior">
                                    <TruncatedText text={garden || "File All Fields"} maxLength={15} />

                                </div>
                                <h3 className="title">Location of the property:</h3>
                                <div className="field property_desc">
                                    <TruncatedText text={PropertyLocation || "File All Fields"} maxLength={15} />

                                </div>
                                <h3 className="title">Why buy this property:</h3>
                                <div className="field why_buy_property">
                                    <TruncatedText text={whyBuyProperty || "File All Fields"} maxLength={15} />
                                </div>
                            </div>
                            <div className="widget col-dis-4 col-tab-4 col-mob-12">
                                <h3 className="title" style={{}}>
                                    Property:
                                </h3>
                                <div className="body">
                                    <label className="field field uploaded_image">
                                        <Image
                                            src="https://www.propertyturkey.com/front/image/default_blank.png"
                                            alt=""
                                            width="100%"
                                        />
                                    </label>
                                    <ul className="no-bullets">
                                        <li className="cf">
                                            Price{" "}
                                            <strong className="right red">
                                                <b className="currency">
                                                    <Typography>{currency}</Typography>
                                                </b>
                                                <b className="price">
                                                    <Typography>{Price}</Typography>

                                                </b>
                                            </strong>
                                        </li>
                                        <li className="cf">
                                            Location{" "}
                                            <strong className="right">
                                                <b className="country">
                                                    <Typography>{Country}</Typography>


                                                </b>{" "}
                                                -{" "}
                                                <b className="city">
                                                    <Typography>{City}</Typography>
                                                </b>{" "}
                                                -{" "}
                                                <b className="area">
                                                    <Typography>{Area}</Typography>
                                                </b>{" "}
                                            </strong>
                                        </li>
                                        <li className="cf">
                                            Property Type{" "}
                                            <strong className="right">
                                                {" "}
                                                <b className="type">
                                                    <Typography>{Type}</Typography>
                                                </b>
                                            </strong>
                                        </li>
                                        <li className="cf">
                                            Bedrooms{" "}
                                            <strong className="right">
                                                <b className="bedrooms">
                                                    <Typography>{Bedrooms}</Typography>

                                                </b>
                                            </strong>
                                        </li>
                                        <li className="cf">
                                            front.Bathrooms{" "}
                                            <strong className="right">
                                                <b className="bathrooms">
                                                    <Typography>{Bathrooms}</Typography>

                                                </b>
                                            </strong>
                                        </li>
                                        <li className="cf">
                                            Living space sqm{" "}
                                            <strong className="right">
                                                <b className="living_space">
                                                    <Typography>{LivingSpace}</Typography>
                                                </b>
                                            </strong>
                                        </li>
                                        <li className="cf">
                                            Land size sqm{" "}
                                            <strong className="right">
                                                <b className="land">
                                                <Typography>{landSize}</Typography>
                                                </b>
                                            </strong>
                                        </li>
                                        <li className="cf">
                                            Pool{" "}
                                            <strong className="right">
                                                <b className="pool">
                                                <Typography>{pool}</Typography>
                                                </b>
                                            </strong>
                                        </li>
                                        <li className="cf">
                                            Status{" "}
                                            <strong className="right">
                                                <b className="status">
                                                <Typography>{status}</Typography>
                                                </b>
                                            </strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cf col-dis-12 col-tab-12 col-dis-12 controls">
                                <div
                                    className="navigateStep left btn"
                                >
                                    Previous
                                </div>
                                <Input type="submit" className="btn right" defaultValue="Save" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
