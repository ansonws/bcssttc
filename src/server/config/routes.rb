Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tournaments, only: [:index, :show] do
        resources :seasons, path: 'entries'
      end 
      get 'tournaments/2020/boys_singles', to: 'entries#boys_singles'
    end
  end
end
