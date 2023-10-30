export default function FormSubmission() {
    const shownData = (e) => {
        e.preventDefault();
        const form = document.getElementById("modelForm");
        const formData = new FormData(form);
        console.log(formData)

    }
    return (
        <form
            // action="http://127.0.0.1:8000/model/post_new_model"
            method="post"
            encType="application/json"
            onSubmit={shownData}
            id="modelForm"
        >
            <h3>Contact us</h3>
            {/* <input type="text" name="address"></input>
            <br></br>
            <input type="email" name="email"></input>
            <br></br>
            <input type="tel" name="phone"></input> */}

            <input type="text" name="asset_name"></input>
            <br></br>
            <input type="text" name="model_name"></input>
            <br></br>
            <input type="text" name="market"></input>
            <br></br>
            <input type="text" name="currency"></input>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    )
}