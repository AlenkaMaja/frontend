import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCode = ({ formData, cart }) => {
    if (!cart || cart.length === 0) return <p className="text-danger text-center">No items in the cart.</p>;

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    const paymentInfo = `HRVHUB30\nEUR${totalPrice}\n${formData.beneficiary || "Default Name"}\n${formData.companyName || "Company"}\n${formData.address || "Address"}\n${formData.iban || "HR0000000000000000"}\n${formData.model || "HR01"}\n${formData.paymentCall || "12345"}\n${formData.paymentDescription || "Cart order payment"}`;

    return (
        <div className="text-center p-5">
            <h3>Scan to Pay</h3>
            <QRCodeSVG value={paymentInfo} size={256} />
        </div>
    );
}

export default QRCode;