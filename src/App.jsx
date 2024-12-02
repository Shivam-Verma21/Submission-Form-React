import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [gender, setGender] = useState('Male')
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  })
  const [resume, setResume] = useState('')
  const [url, seturl] = useState()
  const [selectedOption, setSelectedOption] = useState('')
  const [about, setAbout] = useState('')

  const subjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, contact, gender, selectedOption, subjects, resume, url, about);
  }

  const handleReset = () => {
    setfirstName('')
    setlastName('')
    setEmail('')
    setContact('')
    setGender('male')
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    })
    setResume('')
    seturl('')
    setSelectedOption('')
    setAbout('')
  }

  return (
    <div className="App">
      <h1>React Form</h1>
      <fieldset>
        <form action="#" method='get'>
          <label htmlFor="firstname">First Name<span>*</span></label>
          <input
            type="text"
            placeholder='Enter First Name'
            name='firstname'
            id='firstname'
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            required
          />

          <label htmlFor="lastname">Last Name<span>*</span></label>
          <input
            type="text"
            placeholder='Enter Last Name'
            name='lastname'
            id='lastname'
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            required
          />

          <label htmlFor="email">Enter Email<span>*</span></label>
          <input
            type="text"
            placeholder='Enter Email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="contact">Contact<span>*</span></label>
          <input
            type="text"
            placeholder='Enter mobile number'
            name='contact'
            id='contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <label htmlFor="gender">Gender<span>*</span></label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />Male

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />Female

          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />Other

          <label htmlFor="subject">Your best subject</label>
          <input
            type="checkbox"
            name="subject"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => subjectChange('english')}
          />English

          <input
            type="checkbox"
            name="subject"
            id="english"
            checked={subjects.maths === true}
            onChange={(e) => subjectChange('maths')}
          />Maths

          <input
            type="checkbox"
            name="subject"
            id="english"
            checked={subjects.physics === true}
            onChange={(e) => subjectChange('physics')}
          />Physics

          <label htmlFor="file">Upload Resume<span>*</span></label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />

          <label htmlFor="url">Enter URL<span>*</span></label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => seturl(e.target.value)}
            placeholder='Enter URL'
            required
          />

          <label htmlFor="choice">Select your choice</label>
          <select
            name="choice"
            id="choice"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option
              value=""
              disabled
            >Select your Ans</option>

            <optgroup label='Beginners'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Javascript</option>
            </optgroup>

            <optgroup label='Advance'>
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>

          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder='About your self'
            required
          ></textarea>

          <button
            type='submit'
            value='submit'
            onClick={handleSubmit}
          >Submit</button>

          <button
            type='reset'
            value='reset'
            onClick={handleReset}
          >Reset</button>

        </form>
      </fieldset>
    </div>
  )
}

export default App;
