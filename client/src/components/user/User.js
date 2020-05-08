import React from 'react';
import Card from '@material-ui/core/Card';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container';
import UserToggle from './UserToggle'


export default function User() {
    let entryWidth = {   
        width:'95vw',
    }

    const cardStyle = {
        backgroundColor: '#d1c4e9',
        height: "80vh",
        marginBottom: "calc(20vh-5em)"
    }

    if(useMediaQuery('(min-width:37em)')){
        entryWidth = {   
            width:'35em',
        }
    }

  return (
    <Container style={entryWidth}>
        <Card style={cardStyle}>
            <UserToggle/>
        </Card>
    </Container>
  );
}
