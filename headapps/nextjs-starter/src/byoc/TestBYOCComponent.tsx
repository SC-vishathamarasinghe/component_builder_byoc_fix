import { JSX } from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface TestBYOCComponentProps {
  title: string;
  columnsCount: number;
}

export const TestBYOCComponent = (props: TestBYOCComponentProps): JSX.Element => {
  const columns: string[] = [];
  for (let i = 0; i < props.columnsCount; i++) {
    columns.push(`Component Column ${i + 1}`);
  }

  return (
    <div className="container">
      <h2>{props.title || 'BYOC Demo'}</h2>
      <p>TestBYOCComponent Component</p>
      <div className="row">
        {columns.map((text, index) => (
          <div key={index} className={`col-sm-${props.columnsCount}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(TestBYOCComponent, {
  name: 'Test BYOC Component',
  group: 'Test BYOC Component Group 1',
  properties: {
    title: {
      type: 'string',
    },
    columnsCount: {
      type: 'number',
    },
  },
});
