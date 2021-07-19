import React from 'react';
import { Table, Menu, Label, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class DetailsTable extends React.Component{
    state = {
    };
    render() {
        const { details } = this.props.parentProps;
        
        return (
            <div style={{ marginRight: '5vh' }}>
                <Table celled style={{ width: '50vw' }}>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Recipe</Table.HeaderCell>
                      <Table.HeaderCell>Fats</Table.HeaderCell>
                      <Table.HeaderCell>Proteins</Table.HeaderCell>
                      <Table.HeaderCell>Carbs</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                      {
                          details.map((recipe, index) => {
                              return (
                                <Table.Row>
                                  <Table.Cell>
                                      { index !== 0 ? null :  <Label ribbon>Best Choice</Label> }
                                      {recipe.name}
                                  </Table.Cell>
                                  <Table.Cell>{recipe.fats}</Table.Cell>
                                  <Table.Cell>{recipe.proteins}</Table.Cell>
                                  <Table.Cell>{recipe.carbs}</Table.Cell>
                                </Table.Row>
                              )
                          })
                      }
                  </Table.Body>
                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                          <Menu.Item as='a' icon>
                            <Icon name='chevron left' />
                          </Menu.Item>
                          <Menu.Item as='a'>1</Menu.Item>
                          <Menu.Item as='a'>2</Menu.Item>
                          <Menu.Item as='a'>3</Menu.Item>
                          <Menu.Item as='a'>4</Menu.Item>
                          <Menu.Item as='a' icon>
                            <Icon name='chevron right' />
                          </Menu.Item>
                        </Menu>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>
            </div>
        )
    }
}

export default DetailsTable;
