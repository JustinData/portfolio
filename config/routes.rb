Portfolio::Application.routes.draw do
 
	root 'welcome#index'

	# resource :welcome, only: [:index]

	resources :projects, only: [:index]

	resources :experiences, only: [:index]

	resources :contacts, only: [:index]

	namespace :json, constraints: { format: 'json' } do

		resources :sections 
		
	end
end
