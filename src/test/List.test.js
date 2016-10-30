import React from 'react';
import renderer from 'react-test-renderer';
import { List } from '../Components';

const data = {
    items: [
        {
            number: 1,
            id: 1,
            title: 'alpha',
            body_text: 'body text',
            user: {
                avatar_url: 'http://placehold.it/44x44',
                login: 'username',
                username: 'username'
            },
            html_url: '#',
            labels: [],
            comments: 1
        },
        {
            number: 2,
            id: 2,
            title: 'beta',
            body_text: 'body text',
            user: {
                avatar_url: 'http://placehold.it/44x44',
                login: 'username',
                username: 'username'
            },
            html_url: '#',
            labels: [
                {
                    name: 'label name',
                    url: '#label'
                }
            ],
            comments: 2
        }
    ]
};
const list = renderer.create(<List { ...data } />);
let tree = list.toJSON();

it('should have 2 child cards', () => {
    expect(tree.children.length).toEqual(2);
});

it('should have 3 child elements for each card', () => {
    tree.children.forEach(function (item, index) {
        expect(item.children.length).toEqual(3);
    });
});

it('should have <div> with class of "card__header" as first card element', () => {
    expect(tree.children[0].children[0].type).toEqual('div');
    expect(tree.children[0].children[0].props.className).toEqual('card__header');
    expect(tree.children[1].children[0].type).toEqual('div');
    expect(tree.children[1].children[0].props.className).toEqual('card__header');
});

it('should have <p> with class of "excerpt" as second card element', () => {
    expect(tree.children[0].children[1].type).toEqual('p');
    expect(tree.children[0].children[1].props.className).toEqual('excerpt');
    expect(tree.children[1].children[1].type).toEqual('p');
    expect(tree.children[1].children[1].props.className).toEqual('excerpt');
});

it('should have <div> with 4 children as third card element', () => {
    expect(tree.children[0].children[2].type).toEqual('div');
    expect(tree.children[0].children[2].children.length).toEqual(4);
    expect(tree.children[1].children[2].type).toEqual('div');
    expect(tree.children[1].children[2].children.length).toEqual(4);
});

// if (data.items[0].labels.length) {
//     it('should have <a> with class of "label" as fifth card element', () => {
//         expect(tree.children[1].children[4].type).toEqual('a');
//         expect(tree.children[1].children[4].props.className).toEqual('label');
//     });

//     it('should have <span> with class of "comments-count" as sixth card element', () => {
//         expect(tree.children[1].children[tree.children[0].children.length - 1].type).toEqual('span');
//         expect(tree.children[1].children[tree.children[0].children.length - 1].props.className).toEqual('comments-count');
//     });
// } else {
//     it('should have <span> with class of "comments-count" as fifth card element', () => {
//         expect(tree.children[0].children[4].type).toEqual('span');
//         expect(tree.children[0].children[4].props.className).toEqual('comments-count');
//     });
// }