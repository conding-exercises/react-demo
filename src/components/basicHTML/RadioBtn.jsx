import React, { useState } from 'react';

function MyForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [isSecondHalfEnabled, setIsSecondHalfEnabled] = useState(false);

    return (
        <form>
            {/* First Half of the Form */}
            <div>
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <label>Time:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                <label>Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

            {/* Second Half of the Form */}
                <div>
                    <label>Enable Second Half:</label>
                    <label>
                        <input
                            type="radio"
                            value="option1"
                            name='radioOption'
                            onChange={() => setIsSecondHalfEnabled(false)}
                        />
                        No
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="option2"
                            name='radioOption'
                            onChange={() => setIsSecondHalfEnabled(true)}
                        />
                        Yes
                    </label>
                </div>
            </div>

            <label htmlFor="cName">
                Customer Name:
                <input type="text" name='cName' disabled={!isSecondHalfEnabled}/>
            </label>
            <br></br>

            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;
