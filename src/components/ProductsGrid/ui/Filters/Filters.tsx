import { Box } from "@mui/material";

// TODO: component/Filters изменить вид

function Filters() {
  return (
    <Box>
      <Box>
        <label>Category</label>
        <select>
          <option value="">All Categories</option>
        </select>
      </Box>

      <Box>
        <label>Price Range</label>
        <div>
          <input type="number" name="minPrice" placeholder="Min" />
          <input type="number" name="maxPrice" placeholder="Max" />
        </div>
      </Box>

      <Box>
        <label>Rating</label>
        <select name="minRating">
          <option value="">Any</option>
          <option value="3">3+ ⭐</option>
          <option value="4">4+ ⭐</option>
          <option value="5">5 ⭐</option>
        </select>
      </Box>

      <Box>
        <label>Sort By</label>
        <select name="sort">
          <option value="price,asc">Price: Low to High</option>
          <option value="price,desc">Price: High to Low</option>
          <option value="rating,desc">Popularity</option>
        </select>
      </Box>

      <Box>
        <button>Apply</button>
        <button>Reset</button>
      </Box>
    </Box>
  );
}

export default Filters;
