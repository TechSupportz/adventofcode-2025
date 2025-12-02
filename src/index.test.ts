import { readdirSync } from 'node:fs';
import { describe, it, type TestContext } from 'node:test';
import type { Puzzle } from './types/Puzzle.ts';
import readFile from './utils/readFile.ts';

describe('AoC test runner', () => {
  const specifiedDay = process.env.DAY;
  console.log(`Running tests for day: ${specifiedDay ?? 'all days'}`);

  let dirs = readdirSync('./src/days', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  if (specifiedDay) {
    dirs = dirs.filter((day) => day === specifiedDay);
    if (dirs.length === 0) {
      console.warn(`Day ${specifiedDay} not found`);
    }
  }

  for (const day of dirs) {
    it(`Tests day ${day}`, async (t: TestContext) => {
      let exampleOneInput = '';
      let exampleTwoInput = '';
      const puzzleName = day;

      try {
        const puzzlePath = `src/days/${puzzleName}`;
        [exampleOneInput, exampleTwoInput] = await Promise.all([
          readFile(`${puzzlePath}/example-test-1.txt`),
          readFile(`${puzzlePath}/example-test-2.txt`),
        ]);
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
      const {
        first,
        expectedFirstSolution,
        second,
        expectedSecondSolution,
      }: Puzzle = await import(`./days/${puzzleName}/Puzzle.ts`);

      t.assert.deepStrictEqual(
        first(exampleOneInput).toString(),
        expectedFirstSolution.toString()
      );
      t.assert.deepStrictEqual(
        second(exampleTwoInput).toString(),
        expectedSecondSolution.toString()
      );
    });
  }
});
