import React, { useState } from 'react'

const BirthDateSelector = (date_of_birth) => {

    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);

    const handleYearChange = event => {
        setYear(event.target.value);
    };

    const handleMonthChange = event => {
        setMonth(event.target.value);
    };

    const handleDayChange = event => {
        setDay(event.target.value);
    };

    const generateDays = () => {
        let days = [];
        if (year && month) {
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            for (let i = 1; i <= daysInMonth; i++) {
                days.push(
                    <option key={i} value={i}>
                        {i}
                    </option>
                );
            }
        }
        return days;
    };





    return (
        <div className="formItemTopThree">
            <p>Дата рождения</p>
            <div className="birthDate">
                <div className="selectorContainer">

                    <select name="" id="" value={day} onChange={handleDayChange}>
                        {generateDays()}
                    </select>
                    <img src="/src/selectorIcon.svg" alt="" />
                </div>
                <div className="selectorContainer">

                    <select name="" id="" value={month} onChange={handleMonthChange}>
                        <option value="0">Янв</option>
                        <option value="1">Фев</option>
                        <option value="2">Мар</option>
                        <option value="3">Апр</option>
                        <option value="4">Май</option>
                        <option value="5">Июн</option>
                        <option value="6">Июл</option>
                        <option value="7">Авг</option>
                        <option value="8">Сен</option>
                        <option value="9">Окт</option>
                        <option value="10">Ноя</option>
                        <option value="11">Дек</option>
                    </select>
                    <img src="/src/selectorIcon.svg" alt="" />

                </div>

                <div className="selectorContainer" >

                    <select value={year} onChange={handleYearChange}>

                        <option value={2020}>2020</option>
                        <option value={2021}>2021</option>
                        <option value={2022}>2022</option>

                    </select>
                    <img src="/src/selectorIcon.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BirthDateSelector