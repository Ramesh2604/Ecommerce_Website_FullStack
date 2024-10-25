import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import CheckOutSteps from "./checkOutSteps";
import { toast } from "react-toastify";
import MetaData from "../layouts/MetaData";
import MapPicker from "./MapPicker"; // Import the MapPicker component

export const validateShipping = (shippingInfo, navigate) => {
    if (
        !shippingInfo.address ||
        !shippingInfo.city ||
        !shippingInfo.phoneNo ||
        !shippingInfo.postalCode ||
        !shippingInfo.country ||
        !shippingInfo.state ||
        !shippingInfo.nearbyPlace
    ) {
        toast.error("Please fill in all the shipping information", {
            position: 'bottom-center'
        });
        navigate('/shipping');
    }
};

export default function Shipping() {
    const { shippingInfo = {} } = useSelector(state => state.cartState);
    const [address, setAddress] = useState(shippingInfo.address || '');
    const [city, setCity] = useState(shippingInfo.city || '');
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo || '');
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode || '');
    const [country, setCountry] = useState(shippingInfo.country || '');
    const [state, setState] = useState(shippingInfo.state || '');
    const [nearbyPlace, setNearbyPlace] = useState(shippingInfo.nearbyPlace || '');
    const [location, setLocation] = useState(shippingInfo.location || null);
    const [useCurrentLocation, setUseCurrentLocation] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        // Ensure the phone number is provided and is valid
        if (!phoneNo) {
            toast.error("Please provide a phone number", {
                position: 'bottom-center'
            });
            return;
        }

        if (phoneNo.length !== 10) {
            toast.error("Phone number must be 10 digits long", {
                position: 'bottom-center'
            });
            return;
        }

        // Continue with saving the shipping info if the phone number is valid
        dispatch(saveShippingInfo({ address, city, phoneNo, postalCode, country, state, nearbyPlace, location }));
        navigate("/order/confirm");
    };

    const handleUseCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lng: longitude });
                    setUseCurrentLocation(true);
                    toast.success("Current location set!", {
                        position: 'bottom-center'
                    });
                },
                (error) => {
                    toast.error("Failed to retrieve location", {
                        position: 'bottom-center'
                    });
                }
            );
        } else {
            toast.error("Geolocation is not supported by this browser.", {
                position: 'bottom-center'
            });
        }
    };

    const handleSetLocationOnMap = () => {
        setUseCurrentLocation(false);
        // Optional: set default location to Tamil Nadu if no location is set
        if (!location) {
            setLocation({ lat: 11.1271, lng: 78.6569 }); // Tamil Nadu coordinates
        }
    };

    return (
        <Fragment>
            <MetaData title={'Shipping'} />
            <CheckOutSteps shipping />
            <div className="row wrapper">
                <div className="col-12 col-md-10 col-lg-6 mx-auto">
                    <form onSubmit={submitHandler} className="shadow-lg p-4">
                        <h1 className="mb-4 text-center">Shipping Info</h1>

                        <div className="form-group">
                            <button
                                type="button"
                                className={`btn btn-primary ${useCurrentLocation ? 'active' : ''}`}
                                onClick={handleUseCurrentLocation}
                            >
                                Use Current Location
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary ${!useCurrentLocation ? 'active' : ''}`}
                                onClick={handleSetLocationOnMap}
                            >
                                Set Location on Map
                            </button>
                        </div>

                        {!useCurrentLocation && (
                            <div className="form-group">
                                <MapPicker setLocation={setLocation} />
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city_field">City</label>
                            <input
                                type="text"
                                id="city_field"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone_field">Phone No</label>
                            <input
                                type="phone"
                                id="phone_field"
                                className="form-control"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="postal_code_field">Postal Code</label>
                            <input
                                type="number"
                                id="postal_code_field"
                                className="form-control"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country_field">Country</label>
                            <input
                                type="text"
                                id="country_field"
                                className="form-control"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="state_field">State</label>
                            <input
                                type="text"
                                id="state_field"
                                className="form-control"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nearby_place_field">Nearby Place</label>
                            <input
                                type="text"
                                id="nearby_place_field"
                                className="form-control"
                                value={nearbyPlace}
                                onChange={(e) => setNearbyPlace(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            id="shipping_btn"
                            type="submit"
                            className="btn btn-primary btn-block py-3"
                        >
                            CONTINUE
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
