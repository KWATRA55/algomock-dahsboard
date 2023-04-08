import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
//import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import RangeSlider from 'react-bootstrap-range-slider';


function CreateAlgo() {
    const instrumentOptions = ['Banknifty', 'Nifty', 'Finnifty'];
    const segmentOptions = ['Options', 'Futures'];
    const strikeOptions = ['ITM 10', 'ITM 9', 'ITM 8', 'ITM 7'];
    const durationOptions = ['STBT/BTST', '(N) days before expiry'];
    const [ sliderValue, setSliderValue ] = useState(0); 
    const demoOptions = ['demo 1', 'demo 2', 'demo 3', 'demo 4'];

    var item1 = [9], item2 = [0];
    for(var i=10; i<= 15; i++){
        item1.push(i);
    }
    for(var i=1; i<= 59; i++){
        item2.push(i);
    }

  return (
    <div style={{margin: '15vh 7vw'}}>
        <Form.Label htmlFor="Algo name">Algo name</Form.Label>
        <Form.Control
            type="text"
            id="algoName"
            style={{width: '30vw'}}
        />


        <h3><Form.Label htmlFor="Instrument" style={{color : 'gray', margin:'5vh 0'}}>POSITIONS</Form.Label></h3>

        <div style={{ display:'flex', justifyContent: 'space-around', marginBottom: '7vh 0'}}>
            <div>
                <Form.Label htmlFor="Instrument">Instrument</Form.Label>
                <Dropdown options={instrumentOptions} value={instrumentOptions[0]} placeholder="Select an option" />
            </div>
            <div>
                <Form.Label htmlFor="Segment">Segment</Form.Label>
                <Dropdown options={segmentOptions} value={segmentOptions[0]} placeholder="Select an option" />
            </div>

            <div>
            <Form.Label htmlFor="Segment1">Options</Form.Label><br />
            <ToggleButtonGroup type="radio" name="options1" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" variant="outline-primary" value={1}>
                CE
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" variant="outline-primary" value={2}>
                PE
                </ToggleButton>
            </ToggleButtonGroup>
            </div>

            <div>
            <Form.Label htmlFor="Segment2">Buy / Sell</Form.Label><br />
            <ToggleButtonGroup type="radio" name="options2" defaultValue={3}>
                <ToggleButton id="tbg-radio-3" variant="outline-success" value={3}>
                Buy
                </ToggleButton>
                <ToggleButton id="tbg-radio-4" variant="outline-danger" value={4}>
                Sell
                </ToggleButton>
            </ToggleButtonGroup>
            </div>

            <div>
                <Form.Label htmlFor="Segment">Strike</Form.Label>
                <Dropdown options={strikeOptions} value={strikeOptions[0]} placeholder="Select an option" />
            </div>

            <div>
                <Form.Label htmlFor="Quantity (Lots)">Quantity (Lots)</Form.Label>
                <Form.Control
                    type="text"
                    id="Quantity"
                    style={{width: '9vw'}}
                />
            </div>
            <div>
                <Button variant="primary" style={{margin: '5vh 0'}}>Add Leg</Button>
            </div>
        </div>


        <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '7vh 0'}}>
            <div><input type='checkbox' style={{marginRight: '0.5vw'}}/> Move SL to Cost</div>
            <div><input type='checkbox' style={{marginRight: '0.5vw'}}/> Wait & Trade</div>
            <div><input type='checkbox' style={{marginRight: '0.5vw'}}/> Trade only first entry</div>
            <div><input type='checkbox' style={{marginRight: '0.5vw'}}/> Re-entry / Re-execute</div>
        </div>

        <div style={{ display:'flex', justifyContent: 'space-around', margin: '7vh 0'}}>
            <div>
                <Form.Label htmlFor="Quantity (Lots)">Underlying</Form.Label><br />
                <Button variant="primary">Spot</Button>
            </div>

            <div>
            <Form.Label>Trade type</Form.Label><br />
            <ToggleButtonGroup type="radio" name="options3"  defaultValue={6}>
                <ToggleButton id="tbg-radio-5" variant="outline-primary" value={5}>
                Intraday
                </ToggleButton>
                <ToggleButton id="tbg-radio-6" variant="outline-primary" value={6}>
                Positional
                </ToggleButton>
            </ToggleButtonGroup>
            </div>

            <div>
                <Form.Label htmlFor="Instrument">Duration</Form.Label>
                <Dropdown options={durationOptions} value={durationOptions[0]} placeholder="Select an option" />
            </div>

        </div>

        <div style={{ display:'flex', justifyContent: 'space-around', margin: '7vh 0'}}>
            <div>
                <Form.Label>Start Time</Form.Label><br />
                <div style={{display : 'flex'}}>
                    <Dropdown options={item1} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                </div>
            </div>

            <div>
                <Form.Label>End Time</Form.Label><br />
                <div style={{display : 'flex'}}>
                    <Dropdown options={item1} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                </div>
            </div>
        </div>


        {/* POSTIONAL */}
        <div style={{ display:'flex', justifyContent: 'space-around', margin: '7vh 0'}}> 
            <div>
                <Form.Label>Start Time</Form.Label><br />
                <div style={{display : 'flex'}}>
                    <Dropdown options={item1} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                </div>
            </div>
            <div>
                <Form.Label>Next Day End Time</Form.Label><br />
                <div style={{display : 'flex'}}>
                    <Dropdown options={item1} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                </div>
            </div>
            <div>
                <Form.Label>Check condition next day after (Time)</Form.Label><br />
                <div style={{display : 'flex'}}>
                    <Dropdown options={item1} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                </div>
            </div>
        </div>


        {/* N days before expiry */}
        <div style={{ display:'flex', justifyContent: 'space-around', margin: '7vh 0'}}> 
            <div>
                <Form.Label>Start Time</Form.Label><br />
                <div style={{display : 'flex'}}>
                    <Dropdown options={item1} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                </div>
            </div>
            <div>
            <Form.Label>End day</Form.Label><br />
            <RangeSlider
                value={sliderValue}
                onChange={changeEvent => setSliderValue(changeEvent.target.value)}
                min={0} max={4} step={1} 
            />
            </div>
            <div>
                <Form.Label>End Time</Form.Label><br />
                <div style={{display : 'flex'}}>
                    <Dropdown options={item1} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                </div>
            </div>
            <div>
                <Form.Label>Check condition next day after (Time)</Form.Label><br />
                <div style={{display : 'flex'}}>
                    <Dropdown options={item1} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                    <Dropdown options={item2} value={item2[0]} placeholder="00" />
                </div>
            </div>
        </div>
        <hr />

        <div style={{margin:'3vh 0', display:'flex', justifyContent:'space-evenly'}}>
            <div style={{width:'45%', textAlign: 'center'}}>
            <h3><Form.Label  style={{color : 'gray', margin:'5vh 0'}}>MMT TARGET</Form.Label></h3>
                <div style={{display : 'flex', justifyContent: 'space-around', textAlign: 'left'}}>
                <div>
                    <Form.Label >Type</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div>
                    <Form.Label >Value</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>%</InputGroup.Text>
                        <Form.Control aria-label="" />
                    </InputGroup>
                </div>
                </div>
                <div style={{textAlign: 'left', margin:'2vh 0'}}>
                    <Form.Label >MTM Re-entry</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
               </div>
               <div style={{textAlign: 'left', margin:'2vh 0'}}>
                    <Form.Label >Max no. of re-entries</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
               </div>
               <div style={{textAlign: 'left', margin:'2vh 0'}}>
                    <Form.Label >Action</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
               </div>
            </div>
            <div style={{width:'45%',  textAlign: 'center'}}>
                <h3><Form.Label  style={{color : 'gray', margin:'5vh 0'}}>MMT STOPLOSS</Form.Label></h3>
                <div style={{display : 'flex', justifyContent: 'space-around', textAlign: 'left'}}>
                <div>
                    <Form.Label >Fixed Stoploss</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div>
                    <Form.Label >Value</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>%</InputGroup.Text>
                        <Form.Control aria-label="" />
                    </InputGroup>
                </div>
                </div>
               <div style={{textAlign: 'left', margin:'2vh 0'}}>
                    <Form.Label >Profit lock and Trailing stoploss</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
               </div>
               <div style={{textAlign: 'left', margin:'2vh 0'}}>
                    <Form.Label >MTM Re-entry</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
               </div>
               <div style={{textAlign: 'left', margin:'2vh 0'}}>
                    <Form.Label >Max no. of re-entries</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
               </div>
               <div style={{textAlign: 'left'}}>
                    <Form.Label >Action</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
               </div>

            </div>
        </div>
        <hr />

        <div style={{ margin:'5vh 0'}}>
            <h3><Form.Label  style={{color : 'gray', margin:'2vh 0'}}>PREMIUM MATCHING</Form.Label></h3>
        <div style={{display: 'flex', justifyContent:'space-around', margin:'2vh 0'}}>
            <div>
                    <div><input type='checkbox' style={{marginRight: '0.5vw'}}/> No matching of premiums</div>
                </div>
                <div>
                    <div><input type='checkbox' style={{marginRight: '0.5vw'}}/> Match premiums with <br/>maximum difference</div>
                    <Form.Control
                        type="text"
                        id="Quantity"
                        style={{width: '100%'}}
                    />
                </div>
                <div>
                    <div><input type='checkbox' style={{marginRight: '0.5vw'}}/> Premium close to:</div><br />
                    <Form.Control
                        type="text"
                        id="Quantity"
                        style={{width: '100%'}}
                    />
                </div>
                <div style={{width: '20%'}}>
                    <div><input type='checkbox' style={{marginRight: '0.5vw'}}/> Premium range </div><br /> 
                        <div style={{display: 'flex'}}>
                        <Form.Control
                            type="number"
                            id="Quantity"
                            style={{width: '50%'}}
                        /> To
                        <Form.Control
                            type="number"
                            id="Quantity"
                            style={{width: '50%'}}
                        />
                        </div>
                </div>
            </div>
        </div>
        <hr />

        <div style={{margin:'5vh 0'}}>
            <h3><Form.Label  style={{color : 'gray', margin:'2vh 0'}}>ADVANCED SETTINGS</Form.Label></h3>

            <div style={{display: 'flex', justifyContent:'space-evenly'}}>
                <div >
                    <Form.Label >Entry order type:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div>
                    <Form.Label >Trigger & Limit price buffer in:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div>
                    <Form.Label >Trigger & Limit price buffer value:</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>%</InputGroup.Text>
                        <Form.Control aria-label="" />
                    </InputGroup>                
                </div>
                <div>
                    <Form.Label >Entry with Market order if order Open for (N) secs:</Form.Label>
                    <Form.Control
                            type="number"
                            id="Quantity"
                            placeholder='sec'
                    />
                </div>
            </div>

            {/* if exit order type -> LIMIT (L) / Stoploss Limit */}

            <div style={{display: 'flex', justifyContent:'space-evenly', margin:'3vh 0'}}>
                <div >
                    <Form.Label >Exit order type:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div>
                    <Form.Label >Trigger & Limit price buffer in:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div>
                    <Form.Label >Trigger & Limit price buffer value:</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>%</InputGroup.Text>
                        <Form.Control aria-label="" />
                    </InputGroup>                
                </div>
                <div>
                    <Form.Label >Exit with Market order if order Open for (N) secs:</Form.Label>
                    <Form.Control
                            type="number"
                            id="Quantity"
                            placeholder='sec'
                    />
                </div>
            </div>

            {/* if Exit order type -> Market M */}

            <div style={{display: 'flex', justifyContent:'space-evenly', margin:'3vh 0'}}>
                <div >
                    <Form.Label >Exit order type:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div>
                    <Form.Label >SL placement delay (individual leg):</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control aria-label="" />
                        <InputGroup.Text>min:0, max:60</InputGroup.Text>
                    </InputGroup>          
                </div>
                <div>
                    <Form.Label >SL placement delay (MTM SL):</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control aria-label="" />
                        <InputGroup.Text>min:0, max:60</InputGroup.Text>
                    </InputGroup>            
                </div>
            </div>

            <div style={{display: 'flex', justifyContent:'space-evenly', margin:'3vh 0'}}>
                <div >
                    <Form.Label >Entry order delay:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div style={{width:'20%'}}>
                    <Form.Label >by (seconds)</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control aria-label="" />
                        <InputGroup.Text>min:0, max:60</InputGroup.Text>
                    </InputGroup>          
                </div>
                <div >
                    <Form.Label >Exit order delay:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div style={{width:'20%'}}>
                    <Form.Label >by (seconds)</Form.Label>
                    <InputGroup className="mb-3">
                    <Form.Control aria-label="" />
                        <InputGroup.Text>min:0, max:60</InputGroup.Text>
                    </InputGroup>            
                </div>
            </div>


            <div style={{display: 'flex', justifyContent:'space-evenly', margin:'3vh 0'}}>
                <div >
                    <Form.Label >Calculate entry from:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                </div>
                <div style={{width:'20%'}}>
                    <Form.Label >Calculate exit from:</Form.Label>
                    <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />        
                </div>
                <div >
                    <Form.Label >Trailing frequency interval:</Form.Label>
                    <div style={{display:'flex'}}>
                        <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                        <Dropdown options={demoOptions} value={demoOptions[0]} placeholder="Select any option" />
                    </div>
                </div>
            </div>
        </div>

        <Button variant='success' style={{margin:'2vh 45%'}}>Save settings</Button>

    </div>
  )
}

export default CreateAlgo