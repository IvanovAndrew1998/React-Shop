import React, { useState } from 'react'

const CalendarSelector = () => {
  function generateArrayOfYears() {
    var max = new Date().getFullYear() - 18
    var min = max - 90
    var yearList = []

    for (var i = max; i >= min; i--) {
      yearList.push(i)
    }
    return yearList
  }
  let yearList = generateArrayOfYears();


  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [days, setDays] = useState(getDays(selectedYear, selectedMonth));
  const [selectedDay, setSelectedDay] = useState(1)

  let months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

  function getDays(selectedYear, selectedMonth) {

    let date = new Date(selectedYear, selectedMonth, 0);
    let lastDay = date.getDate();
    let days = [];

    for (let day = 1; day <= lastDay; day++) {
      days.push(day)
    }
    return days

  }


  const handleMonthChange = event => {
    setSelectedMonth(event.target.value);
  };
  const handleYearChange = event => {
    setSelectedYear(event.target.value);
  };
  const handleDayChange = event => {
    setSelectedDay(event.target.value);
  };


  return (
    <div className="formItemTopThree">
      <p>Дата рождения</p>
      <div className="birthDate" onChange={() =>setDays(getDays(selectedYear, selectedMonth))}>
        <div className="selectorContainer" >

          <select name="" id="" value={selectedDay} onChange={handleDayChange}>
            {days.map(day =>
              <option key={day} value={day}>
                {day}
              </option>)
            }
          </select>
          <img src="/src/selectorIcon.svg" alt="" />
        </div>
        <div className="selectorContainer">

          <select value={selectedMonth} onChange={handleMonthChange}>
            {months.map((month, id) =>
              <option key={id} value={id + 1} >
                {month}
              </option>)
            }
          </select>
          <img src="/src/selectorIcon.svg" alt="" />

        </div>

        <div className="selectorContainer" >

          <select value={selectedYear} onChange={handleYearChange}>
            {yearList.map(singleYear =>
              <option value={singleYear} key={singleYear}>{singleYear}</option>
            )}


          </select>
          <img src="/src/selectorIcon.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CalendarSelector