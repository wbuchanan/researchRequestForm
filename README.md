# Research/Data Request Form  
This is currently a work in progress.  In short, the goal is to develop reusable components using [AngularJS2](https://angularjs.org).  Since a single form may not be the most appropriate for all scenarios one of the other goals is to provide some form of logic/branching/routing support that 
pushes end users down the correct path and collects all information that might be required/requested to evaluate a research proposal.  This is still in bits and pieces, but it is getting closer to being ready to prototype and I wanted to make it available to others who may have an interest in working jointly on something like this as well.

# Information about the Objects
There isn't really much commenting at all at this point in the code, but that will change eventually.  For now, here is some basic information about the components, the data they collect, and the objects they emit.


## Address
Contains fields that include street number, direction, name, and type; unit number and type; city, state, and zip code.   

## Collection Window
Defines start and end dates for data collection, boolean indicators that trigger additional form elements if the requestor would like to collect their own data (e.g., Measures) or if they would like to use administrative data (e.g., Existing Data)

## Contact
This is a container component that houses the email and phone components.

## Data Request
Still in progress, but this would be the route that would be used for internal requests for existing data/reports.

## District Sponsor


## Email
Contains three fields: email type, username, and domain.  End users can provide as many email addresses as they would like.

## Existing Data
Contains fields for student, classroom, teacher, grade, school, and district level data elements.  

## Hypothesis
Still in progress, but will be used on the research request path.  Each hypothesis will also include sub-components related to the data collection and analysis.

## Institution
Essentially a subclass of Address that adds name and department fields to the same form group.

## Measures
Contains fields for the name of the measure being used, the unit of measurement, a boolean indicating whether or not this is for a pilot (if it is a pilot the references field will be hidden), and fields for the amount of time and the units of time for the administration.

## People
Contains fields for first/last name and job title.

## Person
Extends the people component (yes I am aware of the horrible semantics here but am waiting to address that for now), with a boolean indicator for internal staff, contact information, and institutional affiliation for requestors outside of the district.

## Phone
Contains fields for phoneType, country code, area code, exchange code, subscriber number (the last four digits in the US Phone number), and extension.  Like the Email component, this component is able to handle arbitrary number of entries.

## Research Request
Still in progress, but will be the pathway for cases where users want to request a research partnership with the district.

## Sponsor
A component for financial sponsor information.  Includes nearly all the same data as found in the Person component (with the exception of the boolean indicator) and also includes fields for the funding amount, funding duration, and the number of staff that would be working on the project.

## Statistical Power
Component containing fields to capture the alpha, beta, total sample size, and minimal detectable effect size parameters from an evaluation of statistical power, as well as the test statistic being used.

## Status
This component is used to provide some type of status indicator and allow internal staff to add notes as well as provide text that could be used to automate sending email updates to end users/clients.
