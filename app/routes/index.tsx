import { LoaderArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader(_: LoaderArgs) {
  return json({ example: ['a', 'b', 'c'] as ReadonlyArray<string> });
}

export default function Index() {
  const { example } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>{example.join(', ')}</li>
      </ul>
    </div>
  );
}
