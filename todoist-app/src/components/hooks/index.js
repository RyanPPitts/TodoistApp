// what are hooks? 
// hold state and check for lifecycle changes in the application
// lifecycle changes can be a new project being added
// make sure we update virtual dom and other components that rely on it
import  { useState, useEffect } from 'react';
import { firebase } from '../firebase';
// why do we use the '..' - this is because firebase.js is up 2 levels - up to hooks then up to components folder
// collated -- all tasks merged into one
// collatedTasks - returns empty object.  SelectedProject like Music and there is no callated task then we want to unsubscribe
import { collatedTasksExist } from '../helpers';
import moment from 'moment';

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    // initial useState with empty array - blank and ready for information
    //users, setUsers
    // cats, setCats
    // dogs, setDogs
    // every time you want to add a dog you use the setDogs state
    // useEffect information - https://reactjs.org/docs/hooks-effect.html
    // allows you to use state without writing a class
    useEffect(() => {
        let unsubscribe = firebase
        .firestone()
        .collection('tasks')
        .where('userId', '==', '123');

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
        ))
        :selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;
        }, [selectedProject]);
};

// firebase go get our tasks with userId of xxx
// go through all the tasks and check the user key
// give me the tasks - if they match display the tasks or move forward
// each condition go get me that particular task - based on projectId
// go check this - if nothing - go to unsubscribe