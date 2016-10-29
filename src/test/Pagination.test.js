import React from 'react';
import renderer from 'react-test-renderer';
import { Pagination } from '../Components';

it('should render 10 buttons in addition to prev/next', () => {
    const data = {
        prev: () => {},
        next: () => {},
        page: () => {},
        issues: 250
    };
    const pages = renderer.create(<Pagination { ...data } />);

    let tree = pages.toJSON();

    expect(tree.children.length).toEqual(12);
});

it('should render the following buttons: prev, 1, 2, 3, 4, 5, 6, 7, ..., 11, 12, next', () => {
    const data = {
        prev: () => {},
        next: () => {},
        page: () => {},
        issues: 300
    };
    const pages = renderer.create(<Pagination { ...data } />);

    let tree = pages.toJSON();

    expect(tree.children[0].children[0]).toEqual('Prev page');
    expect(tree.children.length).toEqual(12);

    for (var i = 1; i < 7; i++) {
        expect(tree.children[i].children[0]).toEqual(i);
    }

    expect(tree.children[8].children[0]).toEqual('...');
    expect(tree.children[9].children[0]).toEqual(11);
    expect(tree.children[10].children[0]).toEqual(12);
    expect(tree.children[11].children[0]).toEqual('Next page');
});

it('should have a click handler on each button', () => {
    const data = {
        prev: () => {},
        next: () => {},
        page: () => {},
        issues: 300
    };
    const pages = renderer.create(<Pagination { ...data } />);

    let tree = pages.toJSON();

    for (var i = 0; i < tree.children.length; i++) {
        if (tree.children[i].type === 'button') {
            expect(typeof tree.children[i].props.onClick).toEqual('function');
        }
    }
});