/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: tour init js
*/

var tour = new Shepherd.Tour({
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        
        classes: 'shadow-md bg-purple-dark',
        scrollTo: { behavior: 'smooth', block: 'center' }
    },

    useModalOverlay:{
        enabled: true
    },
});

tour.addStep({
    title: 'Welcome Back !',
    text: 'This is Step 1',
    attachTo: {
        element: '#logo-tour',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Next',
            classes: 'btn btn-success',
            action: tour.next
        }
    ]
});
// end step 1

tour.addStep({
    title: 'Register your account',
    text: 'Get your Free Velzon account now.',
    attachTo: {
        element: '#register-tour',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            classes: 'btn btn-light',
            action: tour.back
        },
        {
            text: 'Next',
            classes: 'btn btn-success',
            action: tour.next
        }
    ]
});
// end step 2

tour.addStep({
    title: 'Login your account',
    text: 'Sign in to continue to Velzon.',
    attachTo: {
        element: '#login-tour',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            classes: 'btn btn-light',
            action: tour.back
        },
        {
            text: 'Next',
            classes: 'btn btn-success',
            action: tour.next
        }
    ]
});
// end step 3

tour.addStep({
    title: 'Get yout Product',
    text: 'Sign in to continue to Velzon.',
    attachTo: {
        element: '#getproduct-tour',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            classes: 'btn btn-light',
            action: tour.back
        },
        {
            text: 'Next',
            classes: 'btn btn-success',
            action: tour.next
        }
    ]
});
// end step 4

tour.addStep({
    title: 'Thank you !',
    text: 'Sign in to continue to Velzon.',
    attachTo: {
        element: '#thankyou-tour',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            classes: 'btn btn-light',
            action: tour.back
        },
        {
            text: 'Thank you !',
            classes: 'btn btn-primary',
            action: tour.complete
        }
    ]
});
// end step 5

tour.start();