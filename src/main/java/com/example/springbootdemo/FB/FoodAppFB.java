package com.example.springbootdemo.FB;

import java.util.List;

import com.example.springbootdemo.entity.CategoryListEntity;
import com.example.springbootdemo.entity.ItemListEntity;
import com.example.springbootdemo.entity.OffersEntity;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class FoodAppFB {
 private List<ItemListEntity> items;
    private List<OffersEntity> offers;
    private List<CategoryListEntity> categories;
    public FoodAppFB(List<ItemListEntity> items,
                     List<OffersEntity> offers,
                     List<CategoryListEntity> categories) {
        this.items = items;
        this.offers = offers;
        this.categories = categories;
    }
}
