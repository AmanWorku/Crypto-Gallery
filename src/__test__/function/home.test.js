import { fetchCountries, retrieveCountries } from '../../redux/Home/home';

describe('Countries data', () => {
  test('fetch correct data', async () => {
    const data = await fetchCountries();
    expect(data.length).not.toBeNull();
  });
  test('retrieve correct data', async () => {
    const data = await retrieveCountries();
    expect(data.length).not.toBeNull();
  });
});
