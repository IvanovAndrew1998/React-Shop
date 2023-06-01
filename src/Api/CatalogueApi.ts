import { BaseApi } from "./BaseApi.ts";

export class CatalogueApi extends BaseApi {
    async getCatalogueTags() {
        return this.get(
            'catalogue/', 
            [
                {
                    key: 'attributes', 
                    value: 'true'
                }
            ]
        )
    }

    async getCatalogue(tags: any, min_price: number, max_price: number, order_by: '+rating' | '-rating') {
        let params = Object.keys(tags).length ? null : tags;
        if (max_price)
        {
            params = params + [
                {
                    key: 'sizes_weights_prices__0__discounted_price__lt',
                    value: max_price
                }
            ];
        }
        if (params)
        {
            params = params + [
                {
                    key: 'order_by',
                    value: order_by
                }
            ];
        }
        
        return this.get('catalogue/', null);
    }
}