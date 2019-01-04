import React, { Component } from 'react'
import isEqual from 'lodash/isEqual'
import forEach from 'lodash/forEach'
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Button,
  Grid,
  Col,
  Row,
  ButtonGroup,
  Badge,
  Glyphicon,
  Panel
} from 'react-bootstrap'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

import recipes from './recipes'
import logo from './logo.jpg'
import './App.css'

const FieldGroup = ({id, label, help, ...props}) => (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);


const Recipes = ({foods}) => (
    <div>
      {foods.map((food, index) => (
          <Grid className="recipe-result">
            <Row className="show-grid">
              <Col xs={12}>
                <Col xs={4} className="recipe-photo">
                  <img src={recipes[food].image} alt={recipes[food].name}/>
                </Col>
                <Col xs={6}>
                  <h4>{recipes[food].name}</h4>
                  <ul>
                    <li>1/2 lb of Chicken</li>
                    <li>2 Peppers</li>
                    <li>2 Onions</li>
                    <li>10 Tortillas</li>
                  </ul>

                  <Panel id={recipes[food].name}>
                    <Panel.Heading>
                      <Panel.Title toggle>
                        Directions
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body dangerouslySetInnerHTML={{__html: recipes[food].directions}} />
                    </Panel.Collapse>
                  </Panel>
                </Col>
                <Col xs={2} className="recipe-stats">
                  <Col xs={12}>
                    <h4>Prep</h4>
                    <Badge>{recipes[food].prep}</Badge>
                  </Col>
                  <Col xs={12}>
                    <h4>Cook</h4>
                    <Badge>{recipes[food].cook}</Badge>
                  </Col>
                </Col>
              </Col>
            </Row>
          </Grid>
      ))}
    </div>
);


class App extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: ['tortillas', 'chicken', 'peppers', 'onions'],
      recipeList: [],
      allergies: ['Tuna', 'Beans'],
      userAllergies: ['Tomato'],
    }
  }

  ingredientsChange = (tags) => {
    this.setState({ingredients: tags})
  };

  allergiesChange = (tags) => {
    this.setState({allergies: tags})
  };

  userAllergiesChange = (tags) => {
    this.setState({userAllergies: tags})
  };

  selectChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  ready = (event) => {
    const ing = this.state.ingredients.sort();
    let newRecipes = null;

    forEach(recipes.ingredientInput, function (value) {
      if (isEqual(ing, value.ingredients.sort())) {
        newRecipes = value.recipes;
      }
    });

    // console.log('newRecipes', newRecipes)
    // console.log('state', this.state)

    this.setState({recipeList: newRecipes});

    event.preventDefault()
  };

  render = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <h2>Hi Jenna!</h2>
              <form>
                <Row className="show-grid">
                  <h3>What recipe are we making?</h3>
                  <Col xs={6} md={6}>
                    <label className="control-label">Ingredients</label>
                    <TagsInput
                        value={this.state.ingredients}
                        onChange={this.ingredientsChange}
                        // inputValue={this.state.tag}
                        onlyUnique
                        addOnBlur
                    />

                  </Col>
                  <Col xs={3} md={3}>
                    <FormGroup controlId="formControlsSelectMultiple">
                      <ControlLabel>Appliance (Multiple)</ControlLabel>
                      <FormControl componentClass="select" onChange={this.selectChange} name="appliance" multiple>
                        {/*value={['oven']}*/}
                        <option value="microwave">Microwave</option>
                        <option value="oven">Oven</option>
                        <option value="toaster">Toaster</option>
                        <option value="toaster-oven">Toaster Oven</option>
                      </FormControl>
                    </FormGroup>
                  </Col>
                  <Col xs={3} md={3}>
                    <FormGroup controlId="formControlsSelectMultiple">
                      <ControlLabel>Meal Type (Multiple)</ControlLabel>
                      <FormControl componentClass="select" onChange={this.selectChange} name="mealtype" multiple>
                        {/*value={['Appetizer', 'Beverage', 'Bread', 'Breakfast', 'Casserole', 'Dessert', 'Entree', 'Salad', 'Sandwich', 'Side', 'Soup', 'Snack']}*/}
                        <option value="Appetizer">Appetizer</option>
                        <option value="Beverage">Beverage</option>
                        <option value="Bread">Bread</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Casserole">Casserole</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Entree">Entree</option>
                        <option value="Salad">Salad</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Side-Dish">Side Dish</option>
                        <option value="Soup">Soup</option>
                        <option value="Snack">Snack</option>
                      </FormControl>
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="show-grid">
                  <h3>When are we making this?</h3>
                  <Col xs={12}>
                    <Col xs={4} md={4}>
                      <FieldGroup
                          id="formControlsText"
                          type="text"
                          label="Date"
                          placeholder="12/12"
                      />
                    </Col>
                    <Col xs={6} md={8}>
                      <Col xs={4} md={6}>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Time"
                            placeholder="6:00"
                        />
                      </Col>
                      <Col xs={8} md={6}>
                        <label className="control-label">&nbsp;</label>
                        <ButtonGroup bsSize="small" style={{verticalAlign: 'baseline'}}>
                          <Button>AM</Button>
                          <Button>PM</Button>
                          <Button>24HR</Button>
                        </ButtonGroup>
                      </Col>
                    </Col>
                  </Col>
                </Row>

                <Row className="show-grid">
                  <h3>Are we having guests?</h3>
                  <Col xs={12}>
                    <Button bsSize="large" bsStyle="guest"><Glyphicon glyph="user"/> Joe</Button>
                    <Button bsSize="large" bsStyle="guest"><Glyphicon glyph="user"/> Tammy</Button>
                    <Button bsSize="large" bsStyle="guest"><Glyphicon glyph="user"/> Todd</Button>
                    <Button bsSize="large" bsStyle="guest"><Glyphicon glyph="user"/> Work</Button>
                    <Button bsSize="large" bsStyle="guest"><Glyphicon glyph="user"/> + </Button>
                  </Col>
                </Row>

                <Row className="show-grid">
                  <h3>Do our guests have any allergies?</h3>
                  <Col xs={12}>
                    <Col xs={4} md={3}>
                      <label className="control-label">Your Allergies</label>
                      <TagsInput
                          value={this.state.userAllergies}
                          onChange={this.userAllergiesChange}
                          onlyUnique
                          addOnBlur
                      />
                    </Col>
                    <Col xs={8} md={9}>
                      <label className="control-label">Guest Allergies</label>
                      <TagsInput
                          value={this.state.allergies}
                          onChange={this.allergiesChange}
                          onlyUnique
                          addOnBlur
                      />
                    </Col>
                  </Col>
                </Row>
                <Row className="show-grid text-right">
                  <Col xs={10}/>
                  <Col xs={2}>
                    <Button type="submit" onClick={this.ready}>Ready!</Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Grid>

        <hr/>

        {this.state.recipeList.length > 0 && <Recipes foods={this.state.recipeList}/>}
        {/* {(this.state.recipeList)} */}

      </div>
  )
};

export default App;

