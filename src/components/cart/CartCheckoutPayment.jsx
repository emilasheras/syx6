import { useContext, useEffect, useState } from "react";
import syxutils from "../../utils/syxutils";
import { useAddToFirestore } from "../../hooks/useFirebase";
import { FlashPipelineContext } from "../../contexts/FlashPipelineContext";
import { CartContext } from "../../contexts/CartContext";
import { serverTimestamp } from "firebase/firestore";

const CartCheckoutPayment = () => {
    const {setFlash} = useContext(FlashPipelineContext);
	const initialFormState = {
		name: "",
		lastname: "",
		email: "",
		emailConfirm: "",
		phone: "",
	};
	const [formData, setFormData] = useState(initialFormState);
    const { addDocument } = useAddToFirestore();
    const { clearCart } = useContext(CartContext);

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

    const checkEmailRepeat = () => {
        const setEmailConfirmEmpty = () => {
            setFormData({
                ...formData,
                emailConfirm: ""
            });
        };
        if(formData.email !== formData.emailConfirm) {
            // alert("Emails do not match");
            setFlash("Emails do not match");
            setEmailConfirmEmpty();
            return true;
        }
        return false;
    }

    const isFormValid = () => {
        if(checkEmailRepeat()) return false;
        return true;
    }

	const handleSubmit = async (event) => {
		event.preventDefault();
        // Check if the current form is valid
        if(!isFormValid()) return;
        // If the form is valid, submit it to a firebase document
        const docId = await addDocument("orders", {
            ...formData,
            createdAt: serverTimestamp() //* this is initially set to `null` but then updated by the server when the document is created
        });
        if(docId) {
            // alert("Your order has been placed");
            setFlash(`Order placed with id ${docId}`);
            setFormData(initialFormState);
            clearCart();
        }
	};

    useEffect(() => {
        const areFormFieldsEmpty = () => {
            for (const key in formData) {
                if (syxutils.empty(formData[key])) {
                    // console.log(`Form field ${key} is empty (at least)`);
                    return true;
                }
            }
            // console.log("Form is not empty");
            return false;
        }
        areFormFieldsEmpty();
    }, [formData]);

	return (
		<div className="s6-cart-payment">
			<h3 className="s6-h3-bold">Payment</h3>

			<div className="s6-form-container">
				<form className="s6-form" onSubmit={handleSubmit}>
					{/* name */}
					<input
						type="text"
                        name="name"
						required
						autoComplete="name"
						placeholder="Name"
						value={formData.name}
						onChange={handleChange}
					/>
					{/* lastname */}
					<input
						type="text"
                        name="lastname"
						required
						autoComplete="family-name"
						placeholder="Last Name"
						value={formData.lastname}
						onChange={handleChange}
					/>
					{/* email */}
					<input
						type="email"
                        name="email"
						required
						autoComplete="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
					/>
					{/* email confirm */}
					<input
						type="email"
                        name="emailConfirm"
						required
						autoComplete="email"
						placeholder="Confirm Email"
						value={formData.emailConfirm}
						onChange={handleChange}
					/>
					{/* phone */}
					<input
						type="tel"
                        name="phone"
						required
						autoComplete="tel"
						placeholder="Phone"
						value={formData.phone}
						onChange={handleChange}
					/>

					{/* submit button */}
                    <button className="s6-form-button" type="submit">Confirm Order</button>
				</form>
			</div>
		</div>
	);
};

export default CartCheckoutPayment;
