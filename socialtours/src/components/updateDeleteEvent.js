import React from 'react';

class EventDetails extends React.Component {
    state = {
        // id: '',
        type: '',
        title: '',
        description: '',
        event_image: '',
        capacity: '',
        created_at: '',
        updated_at: ''

        // SEED EXAMPLE:
        // id: 1,
        // type: 1, // FK ID in 'EventTypes' table
        // title: "See Bifunkal Orchestra",
        // description: "Orchestrated Blues and Funk",
        // event_image: 'Bifunkal Image Here',
        // capacity: 5000,
        // created_at: '2019-08-14',
        // updated_at: '2019-08-15',
    }
    componentDidMount() {
        if (this.props.forUpdate) {
            this.setState({
                // id: this.props.event.id,
                type: this.props.event.type,
                title: this.props.event.title,
                description: this.props.event.description,
                event_image: this.props.event.event_image,
                capacity: this.props.event.capacity,
                created_at: this.props.event.created_at,
                updated_at: this.props.event.updated_at
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.title]: e.target.value
        })
    }

    addEvent = (e) => {
        e.preventDefault();
        const newEvent = this.state;
        this.props.addEvent(newEvent);
        this.props.toggleAdding();
    }

    updateEvent = (e) => {
        e.preventDefault();
        let newEvent = {
            ...this.state,
            title: this.props.event.title
        }
        this.props.updateEvent(newEvent);
        this.props.toggleUpdate();
    }

    deleteEvent = () => {
        this.props.deleteEvent(this.props.event)
        this.props.toggleUpdate();
    }

    render() {
        return (
            <form onSubmit={this.props.forUpdate ? this.updateEvent : this.addEvent}>
                {/* <input name='id' placeholder='id' onChange={this.handleChange} value={this.state.id} /> */}
                <input name='type' placeholder='type' onChange={this.handleChange} value={this.state.type} />
                <input name='title' placeholder='title' onChange={this.handleChange} value={this.state.title} />
                <input name='description' placeholder='description' onChange={this.handleChange} value={this.state.description} />
                <input name='event_image' placeholder='event_image' onChange={this.handleChange} value={this.state.event_image} />
                <input name='capacity' placeholder='capacity' onChange={this.handleChange} value={this.state.capacity} />
                <input name='created_at' placeholder='created_at' onChange={this.handleChange} value={this.state.created_at} />
                <input name='updated_at' placeholder='updated_at' onChange={this.handleChange} value={this.state.updated_at} />
                {this.props.forUpdate ?
                    <div>
                        <button type='submit'>Update event</button>
                        <button onClick={this.deleteEvent}>Deleted event!</button>
                    </div>
                    :
                    <button type='submit'>Add event</button>
                }
            </form>
        );
    }
}

export default EventDetails; 