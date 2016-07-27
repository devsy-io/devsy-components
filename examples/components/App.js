import React, { Component } from 'react'
import { Avatar, Button, Card, IconSprite, Strip, Theme } from 'devsy-components'
import timeline from './sample-data/timeline'
import detail from './sample-data/detail'

export default class App extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      stripIsVisible: false
    }
    this.toggleStrip = this.toggleStrip.bind(this)
    this.handleStripeCloseButton = this.handleStripeCloseButton.bind(this)
  }

  toggleStrip (e) {
    const visible = !this.state.stripIsVisible
    this.setState({stripIsVisible: visible})
  }

  handleStripeCloseButton () {
    this.setState({stripIsVisible: false})
  }

  render () {
    return (
      <Theme>
        <h4>Strip</h4>
        <Button onClick={this.toggleStrip}>Toggle Strip</Button>
        <Strip visible={this.state.stripIsVisible} handleCloseButton={this.handleStripeCloseButton}>
          <h1>Hola</h1>
          <h2>Contenido</h2>
          <Card {...detail} />
          <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg' size='xs' />
        </Strip>
        <h4>Avatars</h4>
        <h5>wiht image</h5>
        <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg' size='xs' />
        <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg' size='s' />
        <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg' size='m' />
        <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' size='l' />
        <Avatar image='https://s3.amazonaws.com/uifaces/faces/twitter/esthercrawford/128.jpg' size='xl' />
        <h5>with initials</h5>
        <Avatar initials='WK' size='xs' />
        <Avatar initials='MD' size='s' />
        <Avatar initials='DC' size='m' />
        <Avatar initials='DA' size='l' />
        <Avatar initials='AZ' size='xl' />
        <h4>Cards</h4>
        {timeline.map((tweet, index) => <Card {...tweet} key={index} />)}
        <IconSprite />
      </Theme>
    )
  }
}
