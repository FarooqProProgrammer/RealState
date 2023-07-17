import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BuyerGuidetag, Footer, Header } from '../Component'
import { AboutTurkey, AboutUsGuide, AccountSetting, BecomePartner, Contact, DownloadGuide, Featured, FourZeroFour, Home, Investing, News, PrintPreview, PropertyTurkey, RealState, SellProperty, Singlefeatured, Team, Testimonials, TurkeyNews, ViewProperty } from '../pages'
import CitizenShip from '../pages/CitizenShip'
import Carousel from '../pages/Carousel'
import PhonePopup from '../Component/PhonePopup'
import AboutTurkeyCityInfo from '../pages/AboutTurkeyCityInfo'
import ChangePwd from '../pages/ChangePwd'
import Contactus from '../pages/ContactUS'
import BlogView from '../pages/BlogView'
import ProfileEdit from '../pages/ProfileEdit'
import AddProperty from '../pages/AddProperty'
export default function Routing() {
    
    return (
        <BrowserRouter>
            <Header />
            <PhonePopup />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/realState' element={<RealState />} />
                <Route path='/turkishCitizen' element={<CitizenShip />} />
                <Route path='/USA' element={<AboutTurkey />} />
                <Route path='/:id/' element={<AboutTurkeyCityInfo />} />
                <Route path='/buyer' element={<BuyerGuidetag />} />
                <Route path='/aboutusguide' element={<AboutUsGuide />} />
                <Route path='/viewproperty' element={<ViewProperty />} />
                {/* <Route path='/propertyTurkey' element={<PropertyTurkey />} /> */}
                <Route path='/contact' element={<Contact />} />
                <Route path='/news' element={<News />} />
                <Route path='/news/:id' element={<BlogView />} />
                <Route path='/invest' element={<Investing />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/turkeyNews' element={<TurkeyNews />} />
                <Route path='/downloadGuid' element={<DownloadGuide />} />
                <Route path='/featured' element={<Featured />} />
                <Route path='/singlefeatured' element={<Singlefeatured />} />
                <Route path='/becomepartner' element={<BecomePartner />} />
                <Route path='/aboutus/:id' element={<Team />} />
                <Route path='/car' element={<Carousel />} />
                <Route path='/setting' element={<AccountSetting />} />
                <Route path='/sellproperty' element={<SellProperty />} />
                <Route path='/printPreview' element={<PrintPreview />} />
                <Route path='/changepwd' element={<ChangePwd />} />
                <Route path='/contact-us' element={<Contactus />} />
                <Route path='/profile/edit' element={<ProfileEdit />} />
                <Route path='/addproperty' element={<AddProperty />} />
                <Route path='*' element={<FourZeroFour />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
