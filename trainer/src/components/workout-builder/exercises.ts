import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'exercises',
    templateUrl: '/src/components/workout-builder/exercises.tpl.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Exercises{
}

