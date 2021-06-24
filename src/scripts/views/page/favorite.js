import FavoriteRestaurantDB from '../../data/db';
import { restaurantItemTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-heading">Your Favorite Restaurant</h2>
        <section id="list-rest"></section>
        </div>
      </div>`;
  },

  async afterRender() {
    const data = await FavoriteRestaurantDB.getAllRestaurants();
    const listContainer = document.querySelector('#list-rest');

    if (data.length === 0) {
      listContainer.innerHTML = `
        You don't have any Favorite Cafe or Restaurant`;
    } else {
      data.forEach((restaurant) => {
        listContainer.innerHTML += restaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
