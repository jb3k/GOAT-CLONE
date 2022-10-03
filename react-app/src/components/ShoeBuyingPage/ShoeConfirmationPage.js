import React from "react";

function ShoeConfirmationPage() {
    
    return (
        <div className="personal-info-container">
            <input
                type="text"
                placeholder="Purchase Price"
                // value={formData.firstName}
                // onChange={(e) => {
                //     setFormData({ ...formData, firstName: e.target.value });
                // }}
            />
            <input
                type="text"
                placeholder="Sales Tax"
                // value={formData.lastName}
                // onChange={(e) => {
                //     setFormData({ ...formData, lastName: e.target.value });
                // }}
            />
            <input
                type="text"
                placeholder="Shipping"
                // value={formData.username}
                // onChange={(e) => {
                //     setFormData({ ...formData, username: e.target.value });
                // }}
            />
        </div>
    );
}

export default ShoeConfirmationPage;
