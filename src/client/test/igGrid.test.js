import IgGrid from '../Utils/instagramGrid'

test('get grid instagram', async () => {
    const test = await IgGrid.getUrl()
    if (Array.isArray(test)) {
        console.log(test)
    }
});