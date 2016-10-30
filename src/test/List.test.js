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

it('should have 2 child list items', () => {
    expect(tree.children.length).toEqual(2);
});

it('should have 5 child elements for each list item', () => {
    tree.children.forEach(function (item, index) {
        if (data.items[index].labels.length) {
            expect(item.children.length).toEqual(6);
        } else {
            expect(item.children.length).toEqual(5);
        }
    });
});

it('should have <div> with class of "list-issue-header" as first list-item element', () => {
    expect(tree.children[0].children[0].type).toEqual('div');
    expect(tree.children[0].children[0].props.className).toEqual('list-issue-header');
    expect(tree.children[1].children[0].type).toEqual('div');
    expect(tree.children[1].children[0].props.className).toEqual('list-issue-header');
});

it('should have <a> with class of "title-link" as second list-item element', () => {
    expect(tree.children[0].children[1].type).toEqual('a');
    expect(tree.children[0].children[1].props.className).toEqual('title-link');
    expect(tree.children[1].children[1].type).toEqual('a');
    expect(tree.children[1].children[1].props.className).toEqual('title-link');
});

it('should have <p> with class of "excerpt" as third list-item element', () => {
    expect(tree.children[0].children[2].type).toEqual('p');
    expect(tree.children[0].children[2].props.className).toEqual('excerpt');
    expect(tree.children[1].children[2].type).toEqual('p');
    expect(tree.children[1].children[2].props.className).toEqual('excerpt');
});

it('should have <div> with class of "user" as fourth list-item element', () => {
    expect(tree.children[0].children[3].type).toEqual('div');
    expect(tree.children[0].children[3].props.className).toEqual('user');
    expect(tree.children[1].children[3].type).toEqual('div');
    expect(tree.children[1].children[3].props.className).toEqual('user');
});

if (data.items[0].labels.length) {
    it('should have <a> with class of "label" as fifth list-item element', () => {
        expect(tree.children[1].children[4].type).toEqual('a');
        expect(tree.children[1].children[4].props.className).toEqual('label');
    });

    it('should have <span> with class of "comments-count" as sixth list-item element', () => {
        expect(tree.children[1].children[tree.children[0].children.length - 1].type).toEqual('span');
        expect(tree.children[1].children[tree.children[0].children.length - 1].props.className).toEqual('comments-count');
    });
} else {
    it('should have <span> with class of "comments-count" as fifth list-item element', () => {
        expect(tree.children[0].children[4].type).toEqual('span');
        expect(tree.children[0].children[4].props.className).toEqual('comments-count');
    });
}