import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Reports() {
  return (
    <div style={{margin: '15vh 7vw'}}>
        <h1 style={{fontSize: '3.5vh'}}><b>Reports</b></h1><br />
        <div>
            <Form>
                <Form.Check
                    inline
                    label="Select date"
                    name="group1"
                    type='radio'
                />
                <Form.Check
                    inline
                    label="Select date range"
                    name="group1"
                    type='radio'
                />
            </Form>
        </div>

        <div style={{display : 'flex'}}>
            <div className='mt-4' style={{marginRight: '5%'}}>
                <Form.Label htmlFor="Instrument">Select day</Form.Label>
                <Form.Control type="date" name='date_of_birth' />
            </div>

            <div className='mt-4' style={{marginRight: '5%'}}>
                <Form.Label htmlFor="Instrument">Start day</Form.Label>
                <Form.Control type="date" name='date_of_birth' />
            </div>

            <div className='mt-4' style={{marginRight: '5%'}}>
                <Form.Label htmlFor="Instrument">End day</Form.Label>
                <Form.Control type="date" name='date_of_birth' />
            </div>
        </div>

        <Button variant='primary' className='mt-4'>Download Report</Button>

        <div>
            <h1 style={{fontSize: '3vh', margin:'5vh 2vh 0 0'}}><b>Instructions :</b></h1><br />
            <p>
                1. Reports can be generated for a maximum of 7 days at a time. <br /><br />
                2. Current trading day’s reports can be downloaded only after market hours, on the same day, and NOT during market hours.<br /><br />
                3. If an algo is reset for any reason after taking positions or encountering errors, the previous trade details (in case any trades had taken place before the algo was reset) will be lost and not recorded in the reports.<br /><br />
                4. For Positional trades, the exit trade details will show in the reports only after the trades have been squared off, till then, only the entry trades will show in the report and the exit trade details will be blank.<br /><br />
                5. For any change in the client id/broker, algo name, or algo configuration, the latest updated client id/broker, algo name, or algo configuration will reflect in the reports, and NOT the client id/broker, algo name, or algo configuration that was used at the time and day the algo had run historically. This will be the case only for algos that were run before 30th August 2022.<br /><br />
            
                For algos run after 30th August 2022, the client id/broker, algo name, or algo configuration that were used in the algo, will be the ones that will reflect in the downloaded reports, even if the client id/broker, algo name, or algo configuration is updated later.
            </p>
        </div>
    </div>
  )
}

export default Reports