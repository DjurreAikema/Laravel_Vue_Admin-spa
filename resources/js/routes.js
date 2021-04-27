import AllExamples from './components/Example/list.vue';
import CreateExample from './components/Example/create.vue';
import EditExample from './components/Example/edit.vue';

export const routes = [
    {
        name: 'AllExamples',
        path: '/examples',
        component: AllExamples
    },
    {
        name: 'CreateExample',
        path: '/examples/create',
        component: CreateExample
    },
    {
        name: 'EditExample',
        path: '/examples/edit/:id',
        component: EditExample
    }
];
