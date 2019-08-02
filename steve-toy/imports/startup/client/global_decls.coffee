import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withTracker } from 'meteor/react-meteor-data'

window.React = React
window.Component = Component
window.observable = observable
window.observer = observer
window.withTracker = withTracker
