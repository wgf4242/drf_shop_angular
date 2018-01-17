export class Category {
  name: string;
  code: string;
  desc: string;
  category_type: number;
  sub_cat: Category;
  parent_category: number;
  is_tab: boolean;
  add_time: string;
}

export class Good {
  category: number;
  goods_sn: string;
  name: string;
  click_num: number;
  sold_num: number;
  fav_num: number;
  goods_num: number;
  market_price: number;
  shop_price: number;
  goods_brief: string;
  goods_desc: string;
  ship_free: boolean;
  goods_front_image: string;
  is_new: boolean;
  is_hot: boolean;
  add_time: string;
}

