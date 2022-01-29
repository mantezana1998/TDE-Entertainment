import React from 'react';
import { Item, Label } from 'semantic-ui-css';

export default function AlbumHeader() {
    return(
        <Item.Group divided>
            <Item>
                <Item.Image src='https://i.imgur.com/e1LznTs.jpg' />

                <Item.Content>
                    <Item.Header>Name Of Album</Item.Header>
                    <Item.Meta>
                    <span className='cinema'>By: SZA</span>
                    </Item.Meta>
                    <Item.Description>Listeners: 1,342,645</Item.Description>
                    <Item.Extra>
                    <Label icon='music'>13 Songs</Label>
                    <Label>59 Mins</Label>
                    <Label>2019</Label>
                    <Label icon='globe' content='Additional Languages' />
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}